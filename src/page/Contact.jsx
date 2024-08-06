import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Contacto } from "../components/Contacto/Contacto";
export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <head>
        <title>Contacto | Codear</title>
        <meta name="Contacto" content="Contacto" />
        <meta
          name="description"
          content="envianos un mensaje para que te ayudemos a mejorar tu negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/contacto" />
        <meta property="og:title" content="Contacto | Codear" />
        <meta
          property="og:description"
          content="envianos un mensaje para que te ayudemos a mejorar tu negocio."
        />
        </head>
      </Helmet>
      <main>
        <Contacto />
      </main>
    </>
  );
};
