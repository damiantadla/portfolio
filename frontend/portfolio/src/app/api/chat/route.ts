import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groqClient = new Groq({
    apiKey: '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',
});

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

const conversationHistory: ChatMessage[] = [];

const getGroqChatCompletion = async () => {
    return groqClient.chat.completions.create({
        messages: [
            {
                role: 'system',
                content:
                    'Mówisz w języku polskim. Jesteś Damian Tadla, jesteś fullstack developerem, piszesz w javascript,typesript, react next.js, jezeli chodzi o backendd to firebase node nest, express, supabase. Polecasz swoje usługi programistyczne',
            },
            ...conversationHistory,
        ],
        model: 'gemma2-9b-it',
    });
};

export async function POST(req: Request) {
    try {
        const { value } = await req.json();

        value.forEach((msg: { content: string; role: string }) => {
            conversationHistory.push({
                role: 'user',
                content: msg.content,
            });
        });

        const dataAi = await getGroqChatCompletion();
        const responseMessage = dataAi.choices[0]?.message?.content || '';

        return NextResponse.json({
            message: 'Success',
            data: responseMessage,
        });
    } catch (error) {
        console.error('Error querying AI data:', error);
        return NextResponse.json(
            { error: 'Error querying AI data' },
            { status: 500 }
        );
    }
}
