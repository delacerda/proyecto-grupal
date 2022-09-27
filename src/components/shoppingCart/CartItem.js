




const CartItem = ({data, delFromCart, clearCart}) => {

  const {id,image,name,price,quantity} = data; 
  return (
    <div className="flex flex-col w-full mt-10 -mb-10 bg-white lg:ml-12 lg:w-2/5">
      <div className="pt-12 md:pt-0 2xl:ps-4">

        <div className="mt-8">
            <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={image} alt={name} className="w-60"/>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <h3 className="text-sm">Cantidad : {quantity} </h3>
                        <h3 className="text-sm">Precio por un. ${price}</h3> 
                    </div>
                    <div class="flex flex-col p-4 mt-4">
                        <h2 className="text-xl font-bold">Total <span className="flex"> ${price*quantity} </span></h2>
                    </div>
                    <div className="flex flex-col"> 
                    <button className= "w-24 h-11 m-2.5 text-xs border-none bg-primary hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={()=> delFromCart(id)}> Eliminar Uno </button>
                    <button className= "w-24 h-11 m-2.5 text-xs border-none bg-primary hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={()=> delFromCart(id, true)}> Eliminar Todos </button>
                    </div>
      
              </div> 
      </div>
      </div>
      </div>
      </div>
  
  )
}

export default CartItem


/* https://tailwind-elements.com/docs/standard/components/offcanvas/ */













          {/*  <div className="flex justify-center" >
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:flex-row md:max-w-xl">  
        <img alt={name} src={image} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"/>
        <div className="flex flex-col justify-start p-6"> 
        <h4 className="mb-2 text-xl font-medium text-gray-900">{name}</h4>
        <h5 className="mb-4 text-base text-gray-700">por unidad ${price},00</h5>
        <h5 className="text-xs text-gray-600">Cantidad : {quantity}</h5>
        <h3 className="mb-2 text-xl font-medium text-gray-900">Total : $ {price*quantity},00</h3>
      </div>> */}