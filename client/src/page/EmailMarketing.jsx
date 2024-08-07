import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroEmailMarketing } from "../components/HeroEmailMarketing/HeroEmailMarketing";
import { NewSeguimiento } from "../components/newSeguimiento/NewSeguimiento";
import { AutomatizacionAnalisis } from "../components/AutomatizacionAnalisis/AutomatizacionAnalisis";

export const EmailMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
          
        <title>Email Marketing | Codear</title>
        <meta name="Email Marketing" content="Email Marketing" />
        <meta
          name="description"
          content="Ofrecemos el servicio de Email Marketing para tu negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/emailmarketing" />
        <meta property="og:title" content="Email Marketing | Codear" />
        <meta
          property="og:description"
          content="Ofrecemos el servicio de Email Marketing para tu negocio."
        />
      </Helmet>
      <main>
        <HeroEmailMarketing />
        <NewSeguimiento />
        <AutomatizacionAnalisis />
      </main>
    </>
  );
};
