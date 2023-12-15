import { fakeData } from '@/utils/fake-data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  return NextResponse.json({
    status: 'success',
    message: 'Data fetched successfully',
    data: fakeData,
  });
}
