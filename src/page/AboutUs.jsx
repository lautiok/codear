import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroAboutUs } from "../components/HeroAbourUs/HeroAboutUs";
import { QueSomos } from "../components/QueSomos/QueSomos";
import { Contacto } from "../components/Contacto/Contacto";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Sobre nosotros | Codear</title>
        <meta
          name="description"
          content="somos una agencia de desarrollo web y diseño de interfaces digital, ubicada en Buenos Aires, Argentina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/sobrenosotros" />
        <meta
          property="og:title"
          content="Sobre Nosotros | Codear"
        />
        <meta
          property="og:description"
          content="somos una agencia de desarrollo web y diseño de interfaces digital, ubicada en Buenos Aires, Argentina."
        />
        <meta
          property="og:image"
          content="https://codear.dev/assets/images/logo.png"
        />
      </Helmet>
      <main>
        <HeroAboutUs />
        <QueSomos />
        <Contacto />
      </main>
    </>
  );
};