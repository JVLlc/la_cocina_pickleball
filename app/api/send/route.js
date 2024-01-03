import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_WcaHN21E_JVxPJM6gdhry5ecCZ8WffHkc");

export async function POST(req , res) {
    const chunks = [];
    for await (const chunk of req.body) {
        chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf8');
    const parsedBody = JSON.parse(body);
    const { data, error } = await resend.emails.send({
      from: `${parsedBody.name} <onboarding@resend.dev>`,
      to: ['juanlopezlmg@gmail.com'],
      subject: `${parsedBody.name} quiere saber mas sobre La Cocina Pickleball`,
      react: EmailTemplate({ name: parsedBody.name, email: parsedBody.email, message: parsedBody.message }),
    });
  
    if (error) {
        console.log(error);
      return NextResponse.json(
        {message: "Error"}, { status: 500 });
    }

    
    return NextResponse.json(
        {message: "Email sent"}, { status: 200 });
  };