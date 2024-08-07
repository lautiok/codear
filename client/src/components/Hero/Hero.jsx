import React from 'react'
import './hero.css'
import { Button } from '../Button/Button'
import hero from '../../assets/hero.png'
import { useNavigate } from 'react-router-dom'
export const Hero = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/solucionesdigitales')
    }

  return (
    <section className='hero-section'>
        <div className='hero-info'>
            <h2>Soluciones digitales <span>.</span> </h2>
            <p>Ofrecemos una amplia gama de servicios digitales para impulsar su negocio: sistemas de gestión de contenidos, comercio electrónico, aplicaciones móviles, páginas de destino, plataformas de automatización de marketing y soluciones de análisis de datos.</p>
            <Button onClick={handleClick}  text="Conocer Más" variant="info" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins'}} />
        </div>
        <div className='hero-image'>
            <img src={hero} alt="hero" />
        </div>
    </section>
  )
}
