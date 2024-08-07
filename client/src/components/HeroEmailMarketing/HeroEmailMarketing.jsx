import React from "react";
import "./heroemailmarketing.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import emailmarketing from "../../assets/emailmarketing.webp";
export const HeroEmailMarketing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cotizaciones");
  };

  return (
    <section className="heroemailmarketing-section">
      <div className="heroemailmarketing-info">
        <h2>
          Email Marketing<span>.</span>{" "}
        </h2>
        <p>
          Desarrollamos estrategias de email marketing personalizadas que se
          alinean con tus objetivos de negocio. Creamos campañas efectivas que
          maximizan el engagement, fidelizan a tus clientes y generan
          conversiones, asegurando que cada correo enviado tenga un impacto
          positivo en tu audiencia.
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
      <div className="heroemailmarketing-image">
        <img src={emailmarketing} alt="hero" />
      </div>
    </section>
  );
};
