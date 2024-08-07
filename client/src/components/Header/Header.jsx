import React from 'react'
import './header.css'
import { Link, useNavigate, NavLink} from 'react-router-dom'
import { Button } from '../Button/Button'
import { NavResponsive } from '../HeaderResp/NavResponsive'
export const Header = () => {
    const navigate = useNavigate()
    const navegate = () => {
      navigate('/contacto')
    }
  return (
    <header>
        <div className='logo'>
            <h1> <Link to="/">Codear <span>.</span> </Link> </h1>
        </div>
        <NavResponsive />
        <nav className='nav-principal'>
            <ul>
                <li> <NavLink to="/" activeclassname="active">Inicio</NavLink> </li>
                <li> <NavLink to="/sobrenosotros" activeclassname="active">Sobre Nosotros</NavLink> </li>
                <li> <NavLink to="/proyectos" activeclassname="active">Proyectos</NavLink> </li>
                <li> <NavLink to="/servicios" activeclassname="active">Servicios</NavLink> </li>
                {/* <li> <NavLink to="/blog" activeclassname="active">Blog</NavLink> </li> */}
            </ul>
            <Button  text="CONTACTO" onClick={navegate} variant="primary" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins'}} />
        </nav>
    </header>
  )
}
