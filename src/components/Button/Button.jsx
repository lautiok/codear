import React from "react";
import PropTypes from "prop-types"; // Importar PropTypes para la validación de propiedades
import "./Button.css"; // Importar estilos CSS

/**
 * Componente de botón accesible y personalizable
 * 
 * @param {object} props - Las propiedades del componente
 * @param {string} props.text - El texto que se mostrará en el botón
 * @param {function} props.onClick - La función que se ejecutará al hacer clic en el botón
 * @param {string} props.type - El tipo de botón ('button', 'submit', 'reset')
 * @param {string} props.className - Clases adicionales para el botón
 * @param {boolean} props.disabled - Estado deshabilitado del botón
 * @param {object} props.style - Estilos en línea para el botón
 * @param {string} props.variant - Variantes del botón ('primary', 'secondary', 'danger', 'success', 'info')
 * @returns {JSX.Element} El elemento JSX del botón
 */

export const Button = ({
  text,
  onClick = () => {}, // Valor por defecto para onClick
  type = "button", // Valor por defecto para type
  className = "", // Valor por defecto para className
  disabled = false, // Valor por defecto para disabled
  style = {}, // Valor por defecto para style
  variant = "primary", // Valor por defecto para variant
}) => {
  // Nombre accesible derivado del texto o aria-label
  const accessibleName = text || "Botón sin texto"; // Manejo de caso donde text es vacío

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant} ${className}`} // Clases CSS para estilo
      disabled={disabled}
      style={style}
      aria-label={accessibleName} // Proveer un nombre accesible
      aria-disabled={disabled ? "true" : "false"} // Proveer un estado de accesibilidad
    >
      {text}
    </button>
  );
};

// Definición de tipos de propiedades
Button.propTypes = {
  text: PropTypes.string.isRequired, // Texto del botón
  onClick: PropTypes.func, // Función al hacer clic
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Tipo de botón
  className: PropTypes.string, // Clases adicionales
  disabled: PropTypes.bool, // Estado deshabilitado
  style: PropTypes.object, // Estilos en línea
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success", "info"]), // Variantes
};

// Definición de valores por defecto para las propiedades
Button.defaultProps = {
  onClick: () => {}, // Proveer una función vacía por defecto
  type: "button", // Botón por defecto
  className: "", // Sin clases adicionales por defecto
  disabled: false, // No deshabilitado por defecto
  style: {}, // Sin estilos en línea por defecto
  variant: "primary", // Variante primaria por defecto
};

