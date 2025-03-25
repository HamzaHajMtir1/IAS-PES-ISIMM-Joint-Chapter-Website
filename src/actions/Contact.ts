'use server';

import { sendContactSubmissionEmail } from '@/lib/email';

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { name, email, message } = formData;
    
    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Name, email, and message are required'
      };
    }

    // Send email using our ContactSubmissionEmail template
    const result = await sendContactSubmissionEmail(
      name,
      email,
      message,
      process.env.SENDER_EMAIL!
    );

    if (result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, error: result.message };
    }
  } catch (error: any) {
    console.error('Contact form submission error:', error);
        return {
          success: false,
      error: 'Failed to process contact form submission'
        };
      }
}