import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 right-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
      <FontAwesomeIcon onClick={showMenu} className='cursor-pointer' icon={faXmark} />
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Más buscadas</li>
          <li className="cursor-pointer">Grupos</li>
          <li className="cursor-pointer">Productos</li>
          <li className="cursor-pointer">Sobre nosotros</li>
          <li className="cursor-pointer">Contactanos</li>
    </ul>
  )
}

export default MenuItems