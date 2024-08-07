import React from 'react'
import './herosolucionesdigitales.css'
import { Button } from '../Button/Button'
import hero from '../../assets/solucionesdigitales.jpg'
import { useNavigate } from 'react-router-dom'

export const HeroSolucionesDigitales = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/cotizaciones')
    }
  return (
    <section className='herosoluciones-section'>
        <div className='herosoluciones-info'>
            <h2>Soluciones digitales <span>.</span> </h2>
            <p>Ofrecemos una amplia gama de servicios digitales para impulsar su negocio: sistemas de gestión de contenidos, comercio electrónico, aplicaciones móviles, páginas de destino, plataformas de automatización de marketing y soluciones de análisis de datos.</p>
            <Button onClick={handleClick}  text="Quiero cotizar" variant="info" style={{fontSize: '14px', fontWeight: '600', fontFamily: 'poppins', backgroundColor: '#000', color: '#fff'}} />
        </div>
        <div className='herosoluciones-image'>
            <img src={hero} alt="hero" />
        </div>
    </section>
  )
}
