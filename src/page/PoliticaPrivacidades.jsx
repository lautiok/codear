import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PoliticaPrivacidad } from "../components/PoliticaPrivacidad/PoliticaPrivacidad";

export const PoliticaPrivacidades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <head>
        <title>Política de Privacidad | Codear</title>
        <meta name="Política de Privacidad" content="Política de Privacidad" />
        <meta
          name="description"
          content="Política de Privacidad de Codear."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/politicaprivacidad" />
        <meta property="og:title" content="Política de Privacidad | Codear" />
        <meta
          property="og:description"
          content="Política de Privacidad de Codear."
        />
        </head>
      </Helmet>
      <main>
        <PoliticaPrivacidad />
      </main>
    </>
  );
};
