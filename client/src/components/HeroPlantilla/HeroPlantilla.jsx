import React from 'react'
import './heroplantilla.css'

import hero from '../../assets/plantillasweb.jpg'


export const HeroPlantilla = () => {

  return (
    <section className='heroplantillas-section'>
        <div className='heroplantillas-info'>
            <h2>Plantillas de sitios web<span>.</span> </h2>
            <p>Las mejores plantillas de sitios web premium para uso personal y comercial a un precio irresistible. Nuestras plantillas son completamente personalizables y optimizadas para SEO, garantizando un diseño profesional y atractivo.</p>
        </div>
        <div className='heroplantillas-image'>
            <img src={hero} alt="hero" />
        </div>
    </section>
  )
}
