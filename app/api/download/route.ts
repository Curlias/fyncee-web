import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { blobs } = await list();
    
    // Buscar el APK más reciente
    const apkBlob = blobs
      .filter(blob => blob.pathname.endsWith('.apk'))
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0];

    if (!apkBlob) {
      return NextResponse.json({ error: 'No APK found' }, { status: 404 });
    }

    return NextResponse.json({ 
      url: apkBlob.url,
      size: apkBlob.size,
      uploadedAt: apkBlob.uploadedAt
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch APK' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
