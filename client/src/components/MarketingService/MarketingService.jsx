import React from 'react'
import './marketingService.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export const MarketingService = () => {
    const navigate = useNavigate()

    const handleClickSEO = () => {  
        navigate('/seo')
    }

    const handleClickEmail = () => {  
        navigate('/emailmarketing')
    }

    

  return (
     <section className='marketing-service-section'>
        <article className='blanco'>
            <h2>Email Marketing.</h2>
            <p>Captá la atención de tus clientes y aumentá tus conversiones con campañas diseñadas a tu medida.</p>
            <Button onClick={handleClickEmail} text="Conocer Más" variant="info" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins'}} />
        </article>
        <article className='azul'>
            <h2>Optimiza tu Presencia con SEO.</h2>
            <p>Lográ que tus clientes te vean cuando busquen lo que vos ofrecés. Generá tráfico a tu web.</p>
            <Button onClick={handleClickSEO} text="Conocer Más" variant="info" style={{fontSize: '12px', fontWeight: '600', fontFamily: 'poppins', color: 'white'}} />
        </article>
    </section>
  )
}
