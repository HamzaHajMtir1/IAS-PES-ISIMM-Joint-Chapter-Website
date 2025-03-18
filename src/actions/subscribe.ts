'use server';

import WelcomeEmail from '../emails/WelcomeEmail';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import sendgrid from "@sendgrid/mail";
import { render } from '@react-email/components';

const prisma = new PrismaClient();
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function subscribeToNewsletter(formData: FormData | { email: string }) {
  try {
    // Extract email from either FormData or direct object
    const email = formData instanceof FormData 
      ? (formData.get('email') as string | null) ?? '' 
      : formData.email;

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');
    const emailHtml = await render(WelcomeEmail());

    
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
    const options = {
      from: `IAS-PES-ISIMM Newsletter <${process.env.SENDER_EMAIL}>`,
      to: newSubscriber.email,
      subject: 'Welcome to Our Newsletter!',
      html: emailHtml,};
    // Send welcome emailddbrbrjierijger
    sendgrid.send(options,)
    .then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
        return {
          success: false,
          error: 'Failed to send welcome email'
        };
      }
    });
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