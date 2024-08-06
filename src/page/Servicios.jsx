import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroServicios } from "../components/HeroServicios/HeroServicios";
import { CardServicios } from "../components/CardServicios/CardServicios";


export const Servicios = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Nuestros servicios | Codear</title>
        <meta
          name="description"
          content="Ofrecemos un amplio gama de servicios para ayudarte a crear tus proyectos digitales."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/servicios" />
        <meta
          property="og:title"
          content="Servicios | Codear"
        />
        <meta
          property="og:description"
          content="Ofrecemos un amplio gama de servicios para ayudarte a crear tus proyectos digitales."
        />
      </Helmet>
      <main>
        <HeroServicios />
        <CardServicios />
      </main>
    </>
  );
};