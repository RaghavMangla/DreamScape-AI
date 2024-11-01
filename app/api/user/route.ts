import { NextResponse } from 'next/server';
import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    // Verify the request is coming from our application
    const headersList = headers();
    const contentType = headersList.get('content-type');
    
    if (contentType !== 'application/json') {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 415 }
      );
    }

    const body = await request.json();
    const { id, name, email, imageUrl } = body;
    console.log(body)

    if (!email || !id) {
      return NextResponse.json(
        { error: 'Email and id are required' },
        { status: 400 }
      );
    }

    // Check if user exists by clerkId (more reliable than email)
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.id, id));

    if (existingUser.length === 0) {
      // Create new user
      await db.insert(Users).values({
        id,
        name,
        email,
        imageUrl,
      });
    } else {
      // Update existing user
      await db
        .update(Users)
        .set({
          name,
          email,
          imageUrl,
        })
        .where(eq(Users.id, id));
    }

    return NextResponse.json({ 
      success: true,
      message: existingUser.length === 0 ? 'User created' : 'User updated'
    });
  } catch (error) {
    console.error('Error in user API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}