import React from 'react'
import './tsavvybuenoshermanos.css'
import { Button } from '../Button/Button'
export const TsavyBuenosHermanos = () => {

  return (
    <section className="tbh-section">
      <article className="tsavvy">
        <h2>Tsavvy</h2>
        <p>
        Desarrollo de una aplicación web de blog para el sector informativo. Integración con Blogger para la gestión de contenido.
        </p>
        <a href="https://www.tsavvy.com.ar/" target="_blank" rel="noreferrer"><Button text="Ver sitio web" variant="info" style={{color : "white", fontSize : "12px", fontWeight : "600", backgroundColor : "#aaaaaa", marginBottom : "2rem"}}/></a>
      </article>
      <article className="buenoshermanos">
        <h2>Buenos Hermanos</h2>
        <p>
        Proyecto creado para cafetería, obteniendo una Api rest donde puedo visualizar el stock de bebidas.
        </p>
        <a href="https://coffe-wheat.vercel.app/" target="_blank" rel="noreferrer"><Button text="Ver sitio web" variant="info" style={{color : "white", fontSize : "12px", fontWeight : "600", backgroundColor : "#aaaaaa", marginBottom : "2rem"}}/></a>
      </article>
    </section>
  )
}
 