'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Clear Auth0 session
    try {
      // Clear all cookies
      const cookies = document.cookie.split(';');
      cookies.forEach(cookie => {
        document.cookie = cookie
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
      });
      
      // Clear localStorage
      localStorage.clear();
      
      // Clear sessionStorage
      sessionStorage.clear();
      
      // Clear any cached data
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }

      // Redirect to Auth0 logout
      router.push('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-yellow-400 text-[#0B4582] font-semibold hover:bg-yellow-500"
    >
      Cerrar Sesión
    </Button>
  );
};