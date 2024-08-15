import React from 'react'
import './heroecommers.css'
import { Button } from '../Button/Button'
import hero from '../../assets/ecommers.webp'
import { useNavigate } from 'react-router-dom'
export const HeroEcommers = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/cotizaciones')
    }
    
  return (
    <section className='heroecommers-section'>
        <div className='heroecommers-info'>
            <h2>Tu Negocio en Línea <span>.</span> </h2>
            <p>Creamos tu propia tienda online personalizada para que puedas vender tus productos de manera fácil y rápida. Con nuestras soluciones de e-commerce, tendrás una plataforma segura y eficiente.</p>
            <Button onClick={handleClick}  text="Quiero cotizar" variant="info" style={{fontSize: '14px', fontWeight: '600', fontFamily: 'poppins', backgroundColor: '#000', color: '#fff'}} />
        </div>
        <div className='heroecommers-image'>
            <img src={hero} alt="hero" />
        </div>
    </section>
  )
}
