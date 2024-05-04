import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-24 bg-sky-300 '>
        <div>logo</div>
        <ul className='flex gap-32 justify-center h-full w-full items-center'>
        <li><a href="">Inicio</a></li>
        <li><a href="">Productos</a></li>
        <li><a href="">Contactos</a></li>
        </ul>
        <div>Boton-carrito</div>
    </div>
  )
}

export default Navbar