import React from 'react'
import './cotizaciones.css'

export const Cotizaciones = () => {
  return (
    <section className='cotizaciones-section'>
        <article className='contact'>
            <h2>contactanos <span>.</span></h2>
            <div className='contacto'>
                <p>Correo electrónico: <a href="mailto:ventas@codear.ar">ventas@codear.ar</a></p>
                <p className='tel'>Teléfono: <a href="tel:+541176577181">+54 11 36620274</a></p>
            </div>
        </article>
        <article className='azul'>
            <h2>Cotiza tu propio proyecto</h2>
            <form> 
              <input type="text" id="nombre" name="nombre" placeholder="Nombre y apellido" required/>
              <input type="email" id="email" name="email" placeholder="Correo electrónico" required/>
              <textarea id="mensaje" name="mensaje" placeholder="Describe tu proximo proyecto en mente" required></textarea>
              <button className='btn-cotizaciones' type="submit">Enviar</button>
            </form>
        </article>
    </section>
  )
}
