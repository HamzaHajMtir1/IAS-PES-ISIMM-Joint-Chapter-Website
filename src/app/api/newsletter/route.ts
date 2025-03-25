import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { z } from 'zod';

// Define schema for request body
const subscribeSchema = z.object({
  emails: z.string().email('Invalid email format')
});


export async function GET(req: Request) {
    try {
      // Fetch all subscribers from the database
      const subscribers = await prisma.newsLetters.findMany({
        select: {
          emails: true,
        },
      });
  
      return NextResponse.json(
        { 
          success: true,
          count: subscribers.length, 
          data: subscribers 
        }, 
        { status: 200 }
      );
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to fetch subscribers' },
        { status: 500 }
      );
    }
  }

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    
    // Validate email using Zod
    const { emails } = subscribeSchema.parse(body);
    
    // Save to database
    const newSubscription = await prisma.newsLetters.create({
      data: {
        emails: emails,
      },
    });
    
    return NextResponse.json(
      { success: true, message: 'Subscription successful' }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Handle validation errors specifically
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to save subscription' },
      { status: 500 }
    );
  }
}

