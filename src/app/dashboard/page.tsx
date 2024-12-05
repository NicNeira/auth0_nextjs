"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Script from "next/script";

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Redirect if not authenticated
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }

  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="w-full h-full relative">
          {user && (
              <>
                <div className="flex gap-4 justify-center">
                  <h3>Información del Usuario:</h3>
                  <p>Nombre: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
            <tableau-viz
              ref={vizRef}
              src="https://us-east-1.online.tableau.com/t/otichile/views/Anlisisdemediciones/Home"
              toolbar="hidden"
              className="w-full h-[840px]"
              />
              </>
          )}
        </div>
      </div>
      <Script
        type="module"
        src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
      ></Script>
    </>
  );
};

export default Dashboard;
