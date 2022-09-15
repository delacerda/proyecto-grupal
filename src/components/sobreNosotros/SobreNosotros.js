
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faCreditCard} from '@fortawesome/free-regular-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const SobreNosotros = () => {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-8 xs:h-auto md:h-64 bg-primary'>
    <div className='flex flex-col justify-center align-middle text-center xs:mx-20 xs:mt-10 md:ml-20 md:mr-8'>
   <FontAwesomeIcon icon={faAddressBook} className="text-4xl"/>
   <h2 className='mt-2 text-white'>Encontrá la figurita que te falta</h2>
   <p className='text-xs text-white'>¿Te falta la ultima figurita? ¡Acá podes conseguirla y completar tu album!</p>
 </div>
 <div className='flex flex-col justify-center align-middle text-center xs:mx-20 xs:mt-10 md:mx-8'>
   <FontAwesomeIcon icon={faTruckFast} className="text-4xl" />
   <h2 className='mt-2 text-white'>Envío gratis</h2>
   <p className='text-xs text-white'>Realizamos envíos gratis en todo el pais si tu compra es mayor a $5500</p>
 </div>
 <div className='flex flex-col justify-center align-middle text-center xs:mx-20 xs:mt-10 xs:mb-10 md:ml-4 md:mr-20 md:mb-0'>
   <FontAwesomeIcon icon={faCreditCard} className="text-4xl"/>
   <h2 className='mt-2 text-white'>Elegí como pagar</h2>
   <p className='text-xs text-white'>Podés pagar con tarjeta, débito o efectivo en hasta 12 cuotas sin interes.</p>
 </div>


</div>
  )
}

export default SobreNosotros