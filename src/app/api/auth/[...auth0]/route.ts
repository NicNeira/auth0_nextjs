// app/api/auth/[...auth0]/route.ts
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        returnTo: '/dashboard', // Redirige al dashboard después de iniciar sesión
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
