import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Configurar límite de tamaño para archivos APK (100MB)
export const maxDuration = 60; // 60 segundos máximo
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json({ error: 'Filename required' }, { status: 400 });
  }

  if (!request.body) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  try {
    // Usar streaming para manejar archivos grandes
    const blob = await put(filename, request.body, {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Upload failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
