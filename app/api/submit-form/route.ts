// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name');
  const message = formData.get('message');

  console.log("Message received:", name, message);

  return NextResponse.redirect(new URL('/thank-you', req.url), 302);
}
