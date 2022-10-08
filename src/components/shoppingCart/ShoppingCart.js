
import {useReducer, useEffect} from 'react';
import axios from "axios";
import { TYPES } from '../../actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../../reducers/shopping.Reducer';
import CartItem from './CartItem';
import ProductItem from "./ProductItem";
import "./modalCart.css"
import { useModal } from '../../hooks/useModal';
import * as styles from './Styles';



const ShoppingCart = () => {

    const [isOpenModal, openModal, closeModal]= useModal(false);
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
    
    var totalCartPrice = 0; 

    return (
     
      <div className='pt-5 pb-12 text-5xl font-bold text-center bg-gray-100 h-fit text-primary' id='masBuscadas'>
        <h2>MAS BUSCADAS</h2>
        <article className="flex flex-wrap justify-center gap-3.5">

          {products.map((product) =>(<ProductItem key={product.id} data={product} addToCart={addToCart}  />))}   

        </article>

          <button className={styles.footerBtnConfirmar} onClick={openModal}  id='carrito'>Carrito</button>

        <div className= {`modal ${isOpenModal&& "openModal"}`} >  



          <article className="modalContainer"> 

            <button className="boton-x" onClick={closeModal}> x </button>

            <div className={styles.modalBody}>


             {/* className="flex flex-col items-center justify-center" */}
            
              {cart.map((item,index) => <CartItem  key={index} data={item} delFromCart={delFromCart} clearCart={clearCart}/>)}
              {cart.map((item,index) => {totalCartPrice+= item.price * item.quantity;})}
              <div className='flex flex-col items-center justify-center mt-12'> 
                  {totalCartPrice === 0 ? ( 
                    <div className='flex flex-col items-center justify-center mt-6'> 
                  <h2 className='text-2xl'> El Carrito está Vacio</h2>,
                  <button className= "w-36 h-11 mt-12 m-2.5 text-xs border-none bg-primary hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={() => {{clearCart()} {closeModal(false)}}}> Cerrar Carrito </button>
                  </div> ):(
                  <div> 
                    <h2 className='text-xl font-bold'>TOTAL CARRITO : $ {totalCartPrice} </h2>,
                 <div className='flex'> 
                    <button className= "w-24 h-11 mt-12 m-2.5 text-xs border-none bg-secondary hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={() => {{clearCart()} {closeModal(false)}}}> Checkout</button>
                    <button className= "w-24 h-11 mt-12 m-2.5 text-xs border-none bg-primary hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-white" onClick={() => {{clearCart()} {closeModal(false)}}}> Limpiar carrito </button>
                    </div>
                 </div> )}  
              </div>
            </div>

          </article>


        </div> 
              <div className="cart-Length">{cart.length} </div>
      </div>
    );
}

export default ShoppingCart