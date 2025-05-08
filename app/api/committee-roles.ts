// /api/committee-role.ts
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const role = req.cookies.get('role')?.value;

  if (role === 'committee') {
    return NextResponse.json({ access: true });
  } else {
    return NextResponse.json({ access: false });
  }
}
