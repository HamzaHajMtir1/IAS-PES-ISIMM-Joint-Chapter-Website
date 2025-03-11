// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email('Invalid email address'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = schema.parse(req.body);
    
    // Check if email already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Save to database
    await prisma.subscriber.create({
      data: { email },
    });

    // Send welcome email
    const { error } = await resend.emails.send({
      from: 'Newsletter <sbc-isimm-ia-pe@ieee.org>',
      to: email,
      subject: 'Welcome to Our Newsletter!',
      react: (await import('../emails/WelcomeEmail')).default({}),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send welcome email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}