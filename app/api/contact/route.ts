import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validações
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Nome, e-mail, assunto e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // Criar contato
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
      }
    });

    // Aqui você pode implementar o envio de e-mail
    // await sendContactEmail(contact);

    return NextResponse.json({
      contact,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('Erro ao enviar contato:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 