// app/api/auth/[...auth0]/route.ts
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = handleAuth({
  async login(req) {
    try {
      return await handleLogin(req, {
        returnTo: '/dashboard',
      });
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status || 400 }
      );
    }
    
  }
});