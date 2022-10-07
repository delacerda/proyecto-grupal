import React, { useState } from 'react'
import {Link} from 'react-scroll'
import MenuItems from "./MenuItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useModal } from '../hooks/useModal'


const Header = () => {

  const [openModal]= useModal(false);
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
    <div className={color ? 'fixed w-full h-20 transition ease-in-out delay-250 bg-[#3D000F] text-white flex justify-between p-4 items-center' : 'w-full h-20 fixed lg:fixed text-white flex justify-between p-4 items-center'}>
      <div className='cursor-pointer top-6 h-8 w-20 bg-[url("./img/logo.png")] bg-cover order-2 lg:order-1'/> {/*LOGO*/}
            
      <nav className='lg:order-2'>

        <div className='absolute scale-150 left-6 lg:hidden top-6'>
          <FontAwesomeIcon onClick={showMenu} className='scale-150 cursor-pointer' active={active} icon={faBars} /> {/*MENU HAMBURGUESA*/}
        </div>
        
        <ul className={color ? 'hidden lg:flex gap-8 p-6 uppercase' : 'hidden lg:flex gap-8 p-6 uppercase bg-white/10'}> {/*NAVBAR*/}
          <li className="cursor-pointer hover:underline underline-offset-1"><Link to="home" spy={true} smooth={true}>Home</Link></li>
          <li className="cursor-pointer hover:underline underline-offset-1"><Link to="masBuscadas" spy={true} smooth={true}>Más buscadas</Link></li>
          <li className="cursor-pointer hover:underline underline-offset-1"><Link to="fixture" spy={true} smooth={true}>Grupos</Link></li>
          <li className="cursor-pointer hover:underline underline-offset-1">Productos</li>
          <li className="cursor-pointer hover:underline underline-offset-1">Sobre nosotros</li>
          <li className="cursor-pointer hover:underline underline-offset-1">Contactanos</li>          
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>

      <div className='flex items-center justify-center order-3 w-16 h-16 rounded-full bg-black/40 backdrop-blur-lg'> {/*CARRITO + MODAL CARRITO*/}
            <FontAwesomeIcon icon={faCartShopping} className='w-10 h-10 cursor-pointer'/>
              
           
        </div>
    </div>
  )
}

export default Header