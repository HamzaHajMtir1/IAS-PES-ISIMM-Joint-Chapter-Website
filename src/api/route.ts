import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { z } from 'zod';
import WelcomeEmail from '../emails/WelcomeEmail'; // Adjust path as needed

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate email
    const { email } = schema.parse(req.body);

    // Check for existing subscription
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'This email is already subscribed' });
    }

    // Create new subscriber
    const newSubscriber = await prisma.subscriber.create({
      data: { email },
    });
// Inside your handler function:
const { data, error } = await resend.emails.send({
  from: 'Your Newsletter <newsletter@yourdomain.com>',
  to: email,
  subject: 'Welcome to Our Newsletter!',
  react: WelcomeEmail() , // 
});
if (error) {
  console.error('Resend error:', error);
  return res.status(500).json({ error: 'Failed to send welcome email' });
}

return res.status(201).json(newSubscriber);
} catch (error) {
if (error instanceof z.ZodError) {
  return res.status(400).json({ error: error.errors[0].message });
} }}
