"use client";

import { useUser } from "@auth0/nextjs-auth0";

export default function HomePage() {

  const { user, isLoading, error } = useUser()

  return (
    <>
      <div className="w-full h-screen ">
        {/* Mostrar informacion del usuario */}
        {!user && (
          <div className="flex items-center justify-center h-[75%] mx-10">
            <h3 className="text-2xl font-bold text-[#0b4482] text-center">
              Inicie sesión para acceder al dashboard
            </h3>
          </div>
        )}
      </div>
    </>
  );
}
