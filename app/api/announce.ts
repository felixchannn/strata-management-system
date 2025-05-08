// /api/announce.ts
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get('message');

  return NextResponse.json({ announcement: message ?? 'No message provided.' });
}
