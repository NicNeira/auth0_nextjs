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

    // // Tableau Viz Embedding
    // const loadTableauScript = async () => {
    //   if (!document.querySelector('script[src*="tableau.embedding"]')) {
    //     const script = document.createElement("script");
    //     script.type = "module";
    //     script.src =
    //       "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    //     document.head.appendChild(script);
    //   }
    // };

    // loadTableauScript();
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>
        Bienvenido <span className="font-semibold">{user?.name}</span>
      </h1>
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="w-full h-full relative">
          {user && (
            <tableau-viz
              ref={vizRef}
              src="https://us-east-1.online.tableau.com/t/otichile/views/Anlisisdemediciones/Home"
              toolbar="hidden"
              className="w-full h-[840px]"
            />
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
