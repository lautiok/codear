import React from 'react'
import './contacto.css'
export const Contacto = () => {
  return (
    <section className='contacto-section'>
        <article className='contact'>
            <h2>contactanos <span>.</span></h2>
            <div className='contacto'>
                <p>Correo electrónico: <a href="mailto:ventas@codear.ar">ventas@codear.ar</a></p>
                <p className='tel'>Teléfono: <a href="tel:+541176577181">+54 11 36620274</a></p>
            </div>
        </article>
        <article className='azul'>
            <h2>Evianos un mensaje</h2>
            <form> 
              <input type="text" id="nombre" name="nombre" placeholder="Nombre y apellido" required/>
              <input type="text" id="asunto" name="asunto" placeholder="asunto" required/>
              <input type="email" id="email" name="email" placeholder="Correo electrónico" required/>
              <textarea id="mensaje" name="mensaje" placeholder="Envia tu mensaje" required></textarea>
              <button className='btn-contacto' type="submit">Enviar</button>
            </form>
        </article>
    </section>
  )
}
