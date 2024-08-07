import React from "react";
import { Helmet } from "react-helmet-async";

export const Blog = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Blog de Codear, agencia de desarrollo web y diseño de interfaces digital en buenos aires, Argentina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codear.ar/blog" />
        <meta
          property="og:title"
          content="Blog| Agencia de marketing digital y desarrollo web"
        />
        <meta
          property="og:description"
          content="Blog de Codear, agencia de desarrollo web y diseño de interfaces digital en buenos aires, Argentina."
        />
        <title>Blog| Agencia de marketing digital y desarrollo web</title>
      </Helmet>
      <main>
    <h1>Blog</h1>
      </main>
    </>
  );
};
