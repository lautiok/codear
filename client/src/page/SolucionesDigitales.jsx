import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSolucionesDigitales } from '../components/HeroSolucionesDigitales/HeroSolucionesDigitales'
import { CmsPam } from '../components/CmsPam/CmsPam'
import { AnalisisDato } from '../components/AnalisisDato/AnalisisDato'

export const SolucionesDigitales = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
    <Helmet>
      
      <title>Soluciones Digitales | Codear</title>
      <meta name="soluciones-digitales" content="soluciones digitales" />
      <meta property="soluciones" content="soluciones" />
      <meta name="description" content="Ofrecemos soluciones digitales para mejorar tu negocio."/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codear.ar/solucionesdigitales" />
      <meta property="og:title" content="Soluciones Digitales | Codear" />
      <meta property="og:description" content="Ofrecemos soluciones digitales para mejorar tu negocio." />
    </Helmet>
    <main>
        <HeroSolucionesDigitales />
        <CmsPam />
        <AnalisisDato />
    </main>    
    </>
  )
}
