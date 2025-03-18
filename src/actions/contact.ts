import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, to } = req.body;

  try {
    await sendgrid.send({
      from: process.env.SENDGRID_FROM_EMAIL!,
      to,
      replyTo: email,
      subject: `New message from ${name} (Contact Form)`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2d3748;">New Contact Form Submission</h2>
          <p><strong style="color: #4a5568;">Name:</strong> ${name}</p>
          <p><strong style="color: #4a5568;">Email:</strong> ${email}</p>
          <p><strong style="color: #4a5568;">Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f7fafc; padding: 1rem; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}