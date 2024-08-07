import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroProyectos } from "../components/HeroProyectos/HeroProyectos";
import { TsavyBuenosHermanos } from "../components/Tsavyybuenoshermanos/TsavyBuenosHermanos";
import { Cotizaciones } from "../components/Cotizaciones/Cotizaciones";

export const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Proyectos | Codear</title>
        <meta name="Proyectos" content="Proyectos" />
        <meta
          name="description"
          content="contamos con unos proyectos de alta calidad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/proyectos" />
        <meta property="og:title" content="Proyectos | Codear" />
        <meta
          property="og:description"
          content="contamos con unos proyectos de alta calidad."
        />
      </Helmet>
      <main>
        <HeroProyectos />
        <TsavyBuenosHermanos />
        <Cotizaciones />
      </main>
    </>
  );
};