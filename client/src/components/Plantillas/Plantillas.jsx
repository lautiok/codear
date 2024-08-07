import React from "react";
import "./plantillas.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import plantillas from "../../assets/plantillas.png";
export const Plantillas = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plantillasweb");
  };

  return (
    <section className="plan-section">
      <div className="plan-info">
        <h2>
          Plantillas de sitios web<span>.</span>{" "}
        </h2>
        <p>
          Las mejores plantillas de sitios web premium para uso personal y
          comercial a un precio irresistible. Nuestras plantillas son
          completamente personalizables y optimizadas para SEO, garantizando un
          diseño profesional y atractivo.
        </p>
        <Button
          onClick={handleClick}
          text="Conocer Más"
          variant="info"
          style={{ fontSize: "12px", fontWeight: "600", fontFamily: "poppins" }}
        />
      </div>
      <div className="plan-image">
        <img src={plantillas} alt="plantillas" />
      </div>
    </section>
  );
};
