'use server';
import sgClient from '@/lib/sendgrid';
import z from 'zod';
import { sendWelcomeEmail } from '@/lib/email';

interface ContactData {
  email: string;
}
const schema = z.object({
  email: z.string().trim().email('please enter a valid email'),
});
export async function addContactToSendGrid(formData: FormData | ContactData) {
  try {
    const email = formData instanceof FormData 
        ? (formData.get('email') as string | null) ?? '' 
        : formData.email;
    
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  
    // Validate email
    schema.parse({ email: trimmedEmail });

    // Add contact to SendGrid
    const [response] = await sgClient.request({
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        contacts: [{
          email: trimmedEmail,
        }],
        list_ids: [process.env.SENDGRID_LIST_ID!],
      },
    });

    // If contact was added successfully, send welcome email
    if (response.statusCode === 202) {
      try {
        await sendWelcomeEmail(trimmedEmail);
        return { 
          success: true,
          message: 'Contact added successfully and welcome email sent!'
        };
      } catch (emailError: any) {
        console.error('Welcome Email Error:', emailError);
        return { 
          success: true,
          message: 'Contact added successfully but failed to send welcome email'
        };
      }
    }
    
    return { 
      success: false,
      message: 'Failed to add contact'
    };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body?.errors);
    return { 
      success: false, 
      message: error.response?.body?.errors?.[0]?.message || 'Server error' 
    };
  }
}