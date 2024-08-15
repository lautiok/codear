import React from "react";
import "./herositiosweb.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import sitioweb from "../../assets/sitioweb.webp";
export const HeroSitiosWeb = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cotizaciones");
  };
  return (
    <section className="herositioweb-section">
      <div className="herositioweb-info">
        <h2>
          Sitios web a medida<span>.</span>{" "}
        </h2>
        <p>
          Diseñamos páginas web, combinando estética y funcionalidad. Nuestras
          webs están optimizadas para SEO, garantizando un buen posicionamiento.
          Además, son completamente adaptativas, ofreciendo una experiencia de
          usuario en dispositivos móviles.
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
      <div className="herositioweb-image">
        <img src={sitioweb} alt="hero" />
      </div>
    </section>
  );
};
