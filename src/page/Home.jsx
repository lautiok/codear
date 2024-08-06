import React from "react";
import { Hero } from "../components/Hero/Hero";
import { WebService } from "../components/WebService/WebService";
import { Plantillas } from "../components/Plantillas/Plantillas";
import { MarketingService } from "../components/MarketingService/MarketingService";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/public/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Agencia de desarrollo web y diseño de interfaces digital en buenos aires, Argentina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/" />
        <meta
          property="og:title"
          content="Codear | Agencia de marketing digital y desarrollo web"
        />
        <meta
          property="og:description"
          content="Agencia de desarrollo web y diseño de interfaces digital en buenos aires, Argentina."
        />
        <title>Codear | Agencia de marketing digital y desarrollo web</title>
      </Helmet>
      <main>
        <Hero />
        <WebService />
        <Plantillas />
        <MarketingService />
      </main>
    </>
  );
};
