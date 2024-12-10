"use client";

import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import Script from "next/script";
import { useUser } from "@auth0/nextjs-auth0"


const Dashboard = () => {

  const router = useRouter();
  const { user, isLoading, error } = useUser()

  const vizRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0); // Add this to force remount



  useEffect(() => {
  //   // Redirige si el usuario no está autenticado
    if (!isLoading && !user) {
      router.push("/auth/login?returnTo=/dashboard");
    }

    // Force remount of Tableau visualization when user changes
    if (user) {
      setKey(prev => prev + 1);
    }
  }, [user, isLoading, router]);

  // Función que se llama cuando la visualización está lista para interactuar
  const onFirstInteractive = async (event: any) => {
    // console.log("Evento firstinteractive detectado");
    const tableauVizElement: any = event.target;

    // workbook y activeSheet en la API v3 se obtienen como Promises.
    const workbook = await tableauVizElement.workbook;
    const activeSheet = await workbook.activeSheet;

    // console.log("Workbook al firstinteractive:", workbook);
    // console.log("Active Sheet al firstinteractive:", activeSheet);

    // Ejemplo: Obtener filtros de la hoja activa
    const filters = await activeSheet.getFiltersAsync();
    // console.log("Filtros iniciales:", filters);

    // Extraer el valor del filtro 'filtro_user'
    extractFiltroUser(filters);
  };

  // Función que se llama cuando se cambia de pestaña (tab) en el Viz (evento tabswitched)
  const onTabSwitch = async (event: any) => {
    // console.log("Evento tabswitched detectado");
    const tableauVizElement: any = event.target;

    const workbook = await tableauVizElement.workbook;
    const activeSheet = await workbook.activeSheet;

    // console.log("Workbook al tabswitched:", workbook);
    // console.log("Active Sheet al tabswitched:", activeSheet);

    // Ejemplo: Obtener filtros después de cambiar de pestaña
    const filters = await activeSheet.getFiltersAsync();
    // console.log("Filtros tras cambiar de pestaña:", filters);

    // Extraer el valor del filtro 'filtro_user'
    extractFiltroUser(filters);
  };

  // Función para extraer el valor de 'filtro_user' del array de filtros
  const extractFiltroUser = (filters: any[]) => {
    // console.log("Extrayendo valor de 'filtro_user'...");

    // Buscar el filtro con fieldName 'filtro_user'
    const filtroUserFilter = filters.find(
      (filter) => filter._fieldName === "filtro_user"
    );

    // console.log("Filtro 'filtro_user':", filtroUserFilter);

    if (filtroUserFilter) {
      // console.log("Filtro 'filtro_user' encontrado.");

      const appliedValues = filtroUserFilter._appliedValues;

      if (appliedValues.length > 0) {
        // Asumiendo que es un filtro de un solo valor
        const filtroUserValue = appliedValues.map((val) => val._value);
        // console.log("Valor actual de 'filtro_user':", filtroUserValue);
      } else if (filtroUserFilter._isAllSelected) {
        // console.log("'filtro_user' tiene todos los valores seleccionados.");
      } else {
        // console.log("No hay valores aplicados para 'filtro_user'.");
      }
    } else {
      // console.log("Filtro 'filtro_user' no encontrado.");
    }
  };

  useEffect(() => {
    // Este effect registra los eventos sobre el elemento <tableau-viz> una vez que este exista
    if (vizRef.current) {
      const tableauVizElement = vizRef.current.querySelector("tableau-viz");
      if (tableauVizElement) {
        // console.log("Registrando eventos en <tableau-viz>...");
        tableauVizElement.addEventListener(
          "firstinteractive",
          onFirstInteractive
        );
        tableauVizElement.addEventListener("tabswitched", onTabSwitch);

        // Limpieza de eventos al desmontar
        return () => {
          tableauVizElement.removeEventListener(
            "firstinteractive",
            onFirstInteractive
          );
          tableauVizElement.removeEventListener("tabswitched", onTabSwitch);
        };
      } else {
        // console.log("No se encontró <tableau-viz> en el DOM.");
      }
    }
  }, [vizRef]);

  if (isLoading) {
    return <div className="flex gap-4 justify-center">Loading...</div>;
  }

  // console.log('dasboard user', user);
  
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="w-full h-full relative" ref={vizRef}>
          {user && (
            <>
              <div className="flex gap-4 justify-center">
                <h3>Información del Usuario:</h3>
                <p>Nombre: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
              <tableau-viz
                key={user.email}
                src="https://us-east-1.online.tableau.com/t/otichile/views/Anlisisdemediciones/Home"
                toolbar="hidden"
                className="w-full h-[840px]"
              >
              </tableau-viz>
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
