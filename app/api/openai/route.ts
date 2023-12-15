import { NextRequest, NextResponse } from 'next/server';
import { ChatModel, createOpenAIClient } from '@dexaai/dexter';
import OpenAI from 'openai';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: data.prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return NextResponse.json({
    status: 'success',
    message: 'Data fetched successfully',
    data: {
      content: response.choices[0].message.content,
    },
  });
}
