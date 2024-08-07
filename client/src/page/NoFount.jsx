import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import Nofount from '../assets/404.webp'
export const NoFount = () => {

    useEffect(() => {
      window.scrollTo (0, 0)
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/')
    }
  return (
    <section className='no-fount-section'>
        <img src={Nofount} alt="404" />
        <h1>404 - No encontrado</h1>
        <p>La página que estás buscando no existe.</p>
        <Button onClick={handleClick} text="Volver al inicio" variant="primary" style={{fontSize: '14px', fontFamily: 'poppins', color: '#fff'}} />
    </section>
  )
}
