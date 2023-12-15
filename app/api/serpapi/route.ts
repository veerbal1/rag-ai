import { fakeData } from '@/utils/fake-data';
import { NextRequest, NextResponse } from 'next/server';
import { getJson } from 'serpapi';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const query = data.query;
  const results = await getJson(
    {
      engine: 'google',
      api_key: process.env.SERPAPI_API_KEY,
      q: query,
    },
    (json) => {
      return json;
    }
  );
  return NextResponse.json({
    status: 'success',
    message: 'Data fetched successfully',
    data: results,
  });
}
