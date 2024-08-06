import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroEcommers } from '../components/HeroEcommers/HeroEcommers'
import { GestionPago } from '../components/GestionPago/GestionPago'
import { ConfigConver } from '../components/ConfigConver/ConfigConver'


export const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <>
    <Helmet>
      <head>
      <title>Tu negocio en linea | Codear</title>
      <meta name="Tu negocio en linea" content="Tu negocio en linea" />
      <meta name="description" content="Ofrecemos una Ecommerce para tu negocio."/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codear.ar/ecommerce" />
      <meta property="og:title" content="Tu negocio en linea | Codear" />
      <meta property="og:description" content="Ofrecemos una Ecommerce para tu negocio." />
      </head>
    </Helmet>
    <main>
        <HeroEcommers />
        <GestionPago />
        <ConfigConver />
    </main>    
    </>
  )
}