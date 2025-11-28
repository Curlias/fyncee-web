'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string>('');

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });

      const data = await response.json();
      setUrl(data.url);
      alert('APK subido exitosamente!');
    } catch (error) {
      alert('Error al subir el archivo');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="bg-dark-surface p-8 rounded-card max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6">Subir APK de Fyncee</h1>
        
        <input
          type="file"
          accept=".apk"
          onChange={(e) => setFile(e.files?.[0] || null)}
          className="mb-4 text-white w-full"
        />
        
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="w-full bg-primary-cyan text-dark-bg px-6 py-3 rounded-button font-semibold hover:bg-primary-cyan/90 disabled:opacity-50"
        >
          {uploading ? 'Subiendo...' : 'Subir APK'}
        </button>

        {url && (
          <div className="mt-6 p-4 bg-dark-bg rounded-button">
            <p className="text-white text-sm mb-2">URL del archivo:</p>
            <code className="text-primary-cyan text-xs break-all">{url}</code>
          </div>
        )}
      </div>
    </div>
  );
}
