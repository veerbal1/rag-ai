import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  return NextResponse.json({
    status: 'success',
    message: 'Data fetched successfully',
    data: {
      content:
        'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. Human: Hello, who are you? AI: I am an AI created by OpenAI. How can I help you today? Human: I’d like to cancel my subscription. AI: Im sorry to hear that. What is the reason for the cancellation? Human: I dont use it enough. AI: I understand. I will cancel your subscription. Human: Thank you. AI: You re welcome. Is there anything else I can help you with? Human: No, thats all. AI: Thank you for using our service. Have a nice day! Human: You too. AI: Thank you. Goodbye. Human: Goodbye.',
    },
  });
}
