'use client';

import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Borra cookies manualmente
    document.cookie = 'auth0.is.authenticated=; Max-Age=0; path=/;';
    document.cookie = 'session-cookie=; Max-Age=0; path=/;';

    // Borra el caché
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      cacheNames.forEach((name) => caches.delete(name));
    }

    // Redirigir al endpoint de logout
    router.push('/api/auth/logout');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
