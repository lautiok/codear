import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Codear<span>.</span></h2>
          <div className="footer-social-icons">
            <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
            <li><Link to="/proyectos">Nuestros proyectos</Link></li>
            <li><Link to="/servicios">Nuestros Servicios</Link></li>
          </ul>
          <ul>
            <li><Link to="/solucionesdigitales">Servicios digitales</Link></li>
            <li><Link to="/sitiosweb">Sitios web</Link></li>
            <li><Link to="/ecommerce">Ecommerce</Link></li>
          </ul>
          <ul>
            <li><Link to="/seo">SEO</Link></li>
            <li><Link to="/emailmarketing">Marketing</Link></li>
            <li><Link to="/emailmarketing">Email Marketing</Link></li>
          </ul>
          <ul>
            <li><Link to="/politicaprivacidad">Política de privacidad</Link></li>
            <li><Link to="/terminoscondiciones">Términos y condiciones</Link></li>
            <li><Link to="/team">Nuestro Team</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Codear, 2024. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
