import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavResp.css";
export const NavResponsive = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setShowNav(false);
  }, [location]);

  return (
    <div className="nav-container-responsive">
      <button className="toggle-btn" onClick={toggleNav}>
        {" "}
        ☰{" "}
      </button>
      <div className={`nav-r ${showNav ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleNav}>
          X
        </button>
        <nav className="nav-responsive">
          <ul className="nav-ul">
            <li className="link-resp">
              <Link to="/">Inicio</Link>
            </li>
            <li className="link-resp">
              <Link to="/sobrenosotros">Sobre Nosotros</Link>
            </li>
            <li className="link-resp">
              <Link to="/proyectos">Proyectos</Link>
            </li>
            <li className="link-resp">
              <Link to="/servicios">Servicios</Link>
            </li>
             <li className="link-resp">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
