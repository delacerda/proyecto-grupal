
import * as styles from './Styles';


const ShoppingModal = ({data, addToCart, closeModal}) => {
  let {id,image,name,price} = data;
  
  return (
    <div>
        <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
           <button className={styles.closeBtn} onClick={() => closeModal(false)}> X </button>
            
            <div className={styles.modalBody} >
                <img src={image} alt={name}/* className={styles.modalImage} */ className='h-32 w-27'  /> 
                <h4>${price},00</h4>
                <p>Esta por agregar al carrito la figurita de {name}, desea continuar? </p> 
            </div>
            <div className={styles.modalFooter}>
                <button className={styles.footerBtnConfirmar} onClick={()=> {{addToCart(id)} {closeModal(false)}}}>Agregar</button>
                <button className={styles.footerBtnCancelar}onClick={() => closeModal(false)}>Cancelar</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ShoppingModal