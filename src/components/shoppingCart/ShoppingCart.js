
import {useReducer, useEffect} from 'react';
import axios from "axios";
import { TYPES } from '../../actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../../reducers/shopping.Reducer';
import CartItem from './CartItem';
import ProductItem from "./ProductItem";


const ShoppingCart = ({}) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state;

    const UpdateState = async () => {
      const PRODUCT_URL = "http://localhost:5000/products",
            CART_URL= "http://localhost:5000/Cart";

      const resProducts = await axios.get(PRODUCT_URL),
            resCart = await axios.get(CART_URL);
            console.log(PRODUCT_URL)

      const productsList = await resProducts.data,
            cartItems = await resCart.data;

      dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems]})
    }

    useEffect(() => {
      UpdateState()
    }, [])
    
   
    const addToCart =(id) => {
      dispatch({type:TYPES.ADD_TO_CART, payload:id});
    };
    
    const delFromCart =(id, all = false) => {
      if (all) {
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
      }else {
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
      }
    };
    
    const clearCart =() => {
      dispatch ({type:TYPES.CLEAR_CART});
    } ;
    
    return (
     
      <div className='pt-5 pb-12 text-5xl font-bold text-center bg-gray-100 h-fit text-primary'>
        <h2>MAS BUSCADAS</h2>
        <article className="flex flex-wrap justify-center gap-3.5">
        {products.map((product) =>(<ProductItem key={product.id} data={product} addToCart={addToCart}  /> 
          
    ))}   
      </article>
    <div> 
       <article className="flex flex-col items-center justify-center"> 
          {cart.map((item,index) => <CartItem key={index} data={item} delFromCart={delFromCart} clearCart={clearCart} />)}
       </article>
      <button className= "w-24 h-11 mt-12 m-2.5 text-xs border-none bg-primary hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={() => clearCart() }> Limpiar carrito</button>
  
      </div> 
    </div>
  )
}

export default ShoppingCart