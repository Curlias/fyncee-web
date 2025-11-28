'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError('');
    setProgress(0);
    
    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
        headers: {
          'Content-Type': 'application/vnd.android.package-archive',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || `Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setUrl(data.url);
      setProgress(100);
      alert('APK subido exitosamente!');
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Error al subir el archivo';
      setError(errorMsg);
      alert(errorMsg);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="bg-dark-surface p-8 rounded-card max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6">Subir APK de Fyncee</h1>
        
        <div className="mb-4">
          <input
            type="file"
            accept=".apk"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0] || null;
              setFile(selectedFile);
              setError('');
              setUrl('');
            }}
            className="text-white w-full file:mr-4 file:py-2 file:px-4 file:rounded-button file:border-0 file:bg-primary-cyan file:text-dark-bg file:font-semibold hover:file:bg-primary-cyan/90"
          />
          {file && (
            <p className="text-sm text-text-secondary mt-2">
              Tamaño: {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          )}
        </div>
        
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full bg-primary-cyan text-dark-bg px-6 py-3 rounded-button font-semibold hover:bg-primary-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {uploading ? `Subiendo... ${progress}%` : 'Subir APK'}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-expense-red/10 border border-expense-red rounded-button">
            <p className="text-expense-red text-sm">{error}</p>
          </div>
        )}

        {url && (
          <div className="mt-6 p-4 bg-dark-bg rounded-button border border-income-green">
            <p className="text-white text-sm mb-2 font-semibold">✓ Archivo subido exitosamente</p>
            <p className="text-text-secondary text-xs mb-2">URL del archivo:</p>
            <code className="text-primary-cyan text-xs break-all block bg-dark-surface p-2 rounded">{url}</code>
          </div>
        )}
      </div>
    </div>
  );
}
