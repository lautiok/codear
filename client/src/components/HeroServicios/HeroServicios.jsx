import React from "react";
import servicios from "../../assets/servicios.webp";
import "./heroservicios.css";
export const HeroServicios = () => {
  return (
    <section className="heroservicios-section">
      <div className="heroservicios-info">
        <h2>
          Nuestros servicios<span>.</span>{" "}
        </h2>
        <p>
          En Codear, transformamos tus ideas en experiencias digitales
          extraordinarias. Nuestra agencia ofrece una gama completa de servicios
          digitales, desde el diseño de páginas web hasta estrategias de
          marketing online, para impulsar el éxito de tu negocio en el mundo
          digital.
        </p>
      </div>
      <div className="heroservicios-image">
        <img src={servicios} alt="hero" />
      </div>
    </section>
  );
};
