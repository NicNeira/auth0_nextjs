// app/api/auth/[...auth0]/route.ts
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

console.log('AUTH0_SECRET:', process.env.AUTH0_SECRET);
console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID);

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/dashboard",
  }),
});
