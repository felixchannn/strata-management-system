import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // 👈 Required to make it an Edge Function
};

export default async function handler(req: NextRequest) {
  const token = req.headers.get('authorization');

  if (token === 'resident-token-123') {
    return NextResponse.json({ status: 'verified' });
  } else {
    return NextResponse.json({ status: 'unauthorized' }, { status: 401 });
  }
}
