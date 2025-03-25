import { render } from '@react-email/render';
import WelcomeEmail from '@/emails/WelcomeEmail';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ContactSubmissionEmail from '@/emails/ContactSubmissionEmail';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendWelcomeEmail(email: string) {
  try {
    // Render the React Email template to HTML
    const emailHtml = await render(WelcomeEmail());
    
    // Send the email using SendGrid
    await sendgrid.send({
      from: process.env.SENDER_EMAIL!,
      to: email,
      subject: 'Welcome to Our Newsletter!',
      html: emailHtml,
      text: 'Thanks for subscribing to our newsletter. You\'ll now receive regular updates about our latest products and news.',
    });
    
    return { success: true, message: 'Welcome email sent successfully!' };
  } catch (error: any) {
    console.error('SendGrid Error (Welcome Email):', error.response?.body?.errors || error);
    return { 
      success: false, 
      message: error.response?.body?.errors?.[0]?.message || 'Failed to send welcome email' 
    };
  }
}

export async function sendContactSubmissionEmail(name: string, email: string, message: string, to: string) {
  try {
    // Render the React Email template to HTML
    const emailHtml = await render(ContactSubmissionEmail({ name, email, message }));
    
    // Send the email using SendGrid
    await sendgrid.send({
      from: process.env.SENDER_EMAIL!,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New message from ${name} (Contact Form)`,
      html: emailHtml,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    
    return { success: true, message: 'Contact submission email sent successfully!' };
  } catch (error: any) {
    console.error('SendGrid Error (Contact Submission):', error.response?.body?.errors || error);
    return { 
      success: false, 
      message: error.response?.body?.errors?.[0]?.message || 'Failed to send contact submission email' 
    };
  }
}