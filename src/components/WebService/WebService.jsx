import React from 'react'
import './webService.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export const WebService = () => {

  const navigate = useNavigate()

  const handleClickSitiosWeb = () => {
    navigate('/sitiosweb')
  }

  const handleClickNegocio = () => {
    navigate('/ecommerce')
  }
    
  return (
    <section className='web-service-section'>
        <article className='blanco'>
            <h2>Sitios Web a Medida.</h2>
            <p>Desarrollo de sitios web, ofreciendo una experiencia de usuario garantizada</p>
            <Button onClick={handleClickSitiosWeb} text="Conocer Más" variant="info" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins'}} />
        </article>
        <article className='azul'>
            <h2>Tu Negocio en Línea.</h2>
            <p>Tiendas online eficientes y visualmente atractivas para impulsar tus ventas.</p>
            <Button onClick={handleClickNegocio} text="Conocer Más" variant="info" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins', color: 'white'}} />
        </article>
    </section>
  )
}
