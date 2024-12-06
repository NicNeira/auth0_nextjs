"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomePage() {
  const { user } = useUser();

  return (
    <>
      <div className="w-full h-screen ">
        {/* Mostrar informacion del usuario */}
        {user ? (
          <>
            <div className="flex gap-4 justify-center">
              <h3>Información del Usuario:</h3>
              <p>Nombre: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          </>
        ) : (
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
