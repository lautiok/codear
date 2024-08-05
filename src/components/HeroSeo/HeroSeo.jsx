import React from "react";
import seo from "../../assets/seo.webp";
import "./heroseo.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const HeroSeo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cotizaciones");
  };
  return (
    <section className="optimizacionseo-section">
      <div className="optimizacionseo-info">
        <h2>
          Optimiza tu SEO <span>.</span>{" "}
        </h2>
        <p>
          Implementamos estrategias para mejorar la autoridad y
          reputación de tu sitio web. Trabajamos en la adquisición de backlinks
          de calidad de sitios relevantes y de alta autoridad, lo que contribuye
          al aumento del ranking en los motores de búsqueda y la mejora de la
          credibilidad online.
        </p>
        <Button
          onClick={handleClick}
          text="Quiero cotizar"
          variant="info"
          style={{
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "poppins",
            backgroundColor: "#000",
            color: "#fff",
          }}
        />
      </div>
      <div className="optimizacionseo-image">
        <img src={seo} alt="hero" />
      </div>
    </section>
  );
};
