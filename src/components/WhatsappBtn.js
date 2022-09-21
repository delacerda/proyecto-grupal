
import FloatingWhatsApp from 'react-floating-whatsapp'



const WhatsappBtn = () => {
  return (
    <>
        <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="La Más Difícil"
        allowClickAway="true"
        chatMessage= "Hola! ¿Cómo podemos ayudarte hoy?"
        avatar="https://purodiseno.lat/wp-content/uploads/2022/04/LOGO-QATAR-2022-4.jpg"
        placeholder="Escribe tu mensaje"  
        statusMessage="Disponible"
        height="285px"
              

        />
    </>
  )
}

export default WhatsappBtn