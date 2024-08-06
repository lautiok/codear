import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroPlantilla } from '../components/HeroPlantilla/HeroPlantilla'

export const Plantilla = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
    <Helmet>
      <title>Plantillas web| Codear</title>
      <meta name="planillas web" content="Plantillas web" />
      <meta name="description" content="Ofrecemos una plantilla web para tu negocio, obtene un sitio web en menos de 10 minutos y por un precio justo." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codear.ar/plantillasweb" />
      <meta property="og:title" content="Plantillas web| Codear" />
      <meta property="og:description" content="Ofrecemos una plantilla web para tu negocio, obtene un sitio web en menos de 10 minutos y por un precio justo." />
    </Helmet>
    <main>
        <HeroPlantilla />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}> <h2 style={{ fontWeight: 500, fontSize: 20 }}>Proximamente plantillas disponibles</h2> </div>
    </main>    
    </>
  )
}