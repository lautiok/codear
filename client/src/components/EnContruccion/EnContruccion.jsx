import React, { useEffect } from 'react'
import './encontruccion.css'
import encontruccion from '../../assets/encontruccion.webp'

export const EnContruccion = () => {
  useEffect(() => {
    window.scrollTo (0, 0)
  }, [])
  return (
    <section className='en-contruccion-section'>
        <img src={encontruccion} alt="encontruccion" />
        <h2>¡PROXIMAMENTE!</h2>
        <p>Estamos trabajando en esta sección.</p>
    </section>
  )
}
