import React from 'react'
import servicios from '../../data/servicios.json'
import { Button } from '../Button/Button'
import './cardservicios.css'

export const CardServicios = () => {
  return (
    <section className='cardServicios-section'>
        {servicios.map((servicio, index) => (
            <article className='cardServicios-info' key={index}>
                <h2>{servicio.title}</h2>
                <p>{servicio.descripcion}</p>
                <Button text="saber más" variant="primary" style={{fontSize: '14px', fontFamily: 'poppins', color: '#fff'}} />
            </article>
        ))}

    </section>
  )
}
