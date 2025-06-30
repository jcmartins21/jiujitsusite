import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig || '', endpointSecret);
  } catch (err) {
    console.error('Erro na verificação do webhook:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'charge.refunded':
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;
      
      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  if (!session.metadata?.userId || !session.metadata?.items) {
    console.error('Metadados ausentes na sessão:', session.id);
    return;
  }

  const userId = session.metadata.userId;
  const items = JSON.parse(session.metadata.items);
  const shippingAddress = session.metadata.shippingAddress 
    ? JSON.parse(session.metadata.shippingAddress)
    : '';

  try {
    // Criar pedido no banco
    const order = await prisma.order.create({
      data: {
        userId,
        total: session.amount_total ? session.amount_total / 100 : 0,
        shippingAddress,
        paymentMethod: 'stripe',
        paymentStatus: 'PAID',
        status: 'CONFIRMED',
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });

    // Atualizar estoque dos produtos
    for (const item of items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      });
    }

    console.log(`Pedido criado: ${order.id}`);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  // Atualizar status do pedido se necessário
  console.log(`Pagamento confirmado: ${paymentIntent.id}`);
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  // Atualizar status do pedido para falha
  console.log(`Pagamento falhou: ${paymentIntent.id}`);
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  // Processar reembolso
  console.log(`Reembolso processado: ${charge.id}`);
} 