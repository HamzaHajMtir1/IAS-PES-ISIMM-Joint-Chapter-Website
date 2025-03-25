'use server';
import sgClient from '@/lib/sendgrid';
import z from 'zod';

interface ContactData {
  email: string;
}
const schema = z.object({
  email: z.string().email('please enter a valid email'),
});
export async function addContactToSendGrid(formData: FormData | { email: string })

 {
  try {
    const email = formData instanceof FormData 
        ? (formData.get('email') as string | null) ?? '' 
        : formData.email;
  
      // Validate email
      schema.parse({ email });

    // Add contact to SendGrid
    const [response] = await sgClient.request({
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        contacts: [{
          email: email,
        }],
        list_ids: [process.env.SENDGRID_LIST_ID!],
      },
    });

    return { 
      success: response.statusCode === 202,
      message: response.statusCode === 202 
        ? 'Contact added successfully!' 
        : 'Failed to add contact'
    };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body?.errors);
    return { 
      success: false, 
      message: error.response?.body?.errors?.[0]?.message || 'Server error' 
    };
  }
}