'use server';

import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { z } from 'zod';
import WelcomeEmail from '../emails/WelcomeEmail';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function subscribeToNewsletter(formData: FormData | { email: string }) {
  try {
    // Extract email from either FormData or direct object
    const email = formData instanceof FormData 
      ? formData.get('email') as string 
      : formData.email;
    
    // Validate email
    schema.parse({ email });

    // Check for existing subscription
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return {
        success: false,
        error: 'This email is already subscribed'
      };
    }

    // Create new subscriber
    const newSubscriber = await prisma.subscriber.create({
      data: { email },
    });

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'IAS-PES-ISIMM Newsletter <onboarding@resend.dev>',
      to: process.env.NODE_ENV === 'production' ? email : 'srayen15@gmail.com', // Use verified email in development
      subject: 'Welcome to Our Newsletter!',
      react: WelcomeEmail(),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send welcome email'
      };
    }

    return {
      success: true,
      data: newSubscriber
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message
      };
    }
    
    console.error('Subscription error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred'
    };
  }
}