import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from "./MenuItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'fixed w-full h-20 bg-[#3D000F] text-white flex justify-between p-4 items-center' : 'w-full h-20 fixed lg:fixed text-white flex justify-between p-4 items-center'}>
      <div className='cursor-pointer top-6 h-8 w-20 bg-[url("./img/logo.png")] bg-cover order-2 lg:order-1'/> {/*LOGO*/}
            
      <nav className='lg:order-2'>

        <div className='absolute left-6 lg:hidden top-6 scale-150'>
          <FontAwesomeIcon onClick={showMenu} className='scale-150 cursor-pointer' active={active} icon={faBars} /> {/*MENU HAMBURGUESA*/}
        </div>
        
        <ul className={color ? 'hidden lg:flex gap-8 p-6 uppercase' : 'hidden lg:flex gap-8 p-6 uppercase bg-white/10'}> {/*NAVBAR*/}
          <li className="hover:underline underline-offset-1 cursor-pointer">Home</li>
          <li className="hover:underline underline-offset-1 cursor-pointer">Más buscadas</li>
          <li className="hover:underline underline-offset-1 cursor-pointer">Grupos</li>
          <li className="hover:underline underline-offset-1 cursor-pointer">Productos</li>
          <li className="hover:underline underline-offset-1 cursor-pointer">Sobre nosotros</li>
          <li className="hover:underline underline-offset-1 cursor-pointer">Contactanos</li>          
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>

      <div className='bg-black/40 backdrop-blur-lg rounded-full w-16 h-16 flex justify-center items-center order-3'> {/*CARRITO*/}
            <FontAwesomeIcon icon={faCartShopping} className='w-10 h-10 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header