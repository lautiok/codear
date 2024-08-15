import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para la validación de propiedades
import './Button.css'; // Importar estilos CSS

export const Button = ({
  text,
  onClick = () => {},  // Valor por defecto para onClick
  type = "button",      // Valor por defecto para type
  className = "",       // Valor por defecto para className
  disabled = false,     // Valor por defecto para disabled
  style = {},           // Valor por defecto para style
  variant = "primary",  // Valor por defecto para variant
}) => {
  return (
    <>
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant} ${className}`} // Clases CSS para estilo
      disabled={disabled}
      style={style}
      aria-label={text}
      arial-labelledby={text}
    >
      {text}
    </button>
    </>
  );
};

// Definición de tipos de propiedades
Button.propTypes = {
  text: PropTypes.string.isRequired, // Texto del botón
  onClick: PropTypes.func,           // Función al hacer clic
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Tipo de botón
  className: PropTypes.string,       // Clases adicionales
  disabled: PropTypes.bool,          // Estado deshabilitado
  style: PropTypes.object,           // Estilos en línea
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'info']), // Variantes
};
