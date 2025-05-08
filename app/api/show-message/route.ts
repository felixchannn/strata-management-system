// app/api/show-message/route.ts
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  return new NextResponse(`You searched for announcement ID: ${id}`);
}
