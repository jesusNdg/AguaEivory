import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-12 bg-gray-200 flex items-center justify-around'>
        <div className='w-48'>logo</div>
        <ul className='flex justify-around h-full w-96 items-center'>
        <li><a href="">Inicio</a></li>
        <li><a href="">Productos</a></li>
        <li><a href="">Contactos</a></li>
        </ul>
        <div className='w-48'>Carrito de compras</div>
    </div>
  )
}

export default Navbar