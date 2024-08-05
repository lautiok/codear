import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSeo } from '../components/HeroSeo/HeroSeo'
import { AuditoriaMonitoreo } from '../components/AuditoriaMonitoreo/AuditoriaMonitoreo'
import { EcommersCreacion } from '../components/EcommersCreacion/EcommersCreacion'

export const Seo = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
        <>
    <Helmet>
      <title>Optimizacion SEO | Codear</title>
      <meta name="Tu negocio en linea" content="Tu negocio en linea" />
      <meta name="description" content="Ofrecemos una Ecommerce para tu negocio."/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codear.ar/ecommerce" />
      <meta property="og:title" content="Tu negocio en linea | Codear" />
      <meta property="og:description" content="Ofrecemos una Ecommerce para tu negocio." />
    </Helmet>
    <main>
        <HeroSeo />
        <AuditoriaMonitoreo />
        <EcommersCreacion />
    </main> 
    </>
  )
}
