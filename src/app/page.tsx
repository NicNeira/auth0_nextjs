'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Bienvenido a Mi Aplicación {user?.name}</h1>
      {user ? (
        <a href="/api/auth/logout">Cerrar Sesión</a>

      ) : (
        <a href="/api/auth/login">Iniciar Sesión</a>

      )}
    </div>
  );
}
