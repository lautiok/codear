import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSitiosWeb } from '../components/HeroSitiosWeb/HeroSitiosWeb'
import { DiseñoyOptimizacion } from '../components/DiseñoyOptimizacion/DiseñoyOptimizacion'
import { RedesConsultorias } from '../components/RedesConsultorias/RedesConsultorias'


export const SitiosWeb = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
    <Helmet>
        <head>
      <title>Sitios Web | Codear</title>
      <meta name="sitios-web" content="sitios web" />
      <meta name="description" content="Ofrecemos sitios web para mejorar tu negocio."/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codear.ar/sitiosweb" />
      <meta property="og:title" content="Sitios Web | Codear" />
      <meta property="og:description" content="Ofrecemos sitios web para mejorar tu negocio." />
      </head>
    </Helmet>
    <main>
      <HeroSitiosWeb />
      <DiseñoyOptimizacion />
      <RedesConsultorias />
    </main>    
    </>
  )
}
