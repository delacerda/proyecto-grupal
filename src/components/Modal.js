
import * as styles from './Styles'



import React from 'react'

const Modal = ({closeModal}) => {

  return (
    <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
            <button className={styles.closeBtn} onClick={() => closeModal(false)}> x </button>
            <div className={styles.modalTitle}>
                <h1>Agregar al carrito </h1>
            </div>
            <div className={styles.modalBody} >
                <p>Esta por agregar al carrito una figurita, desea continuar? </p>
            </div>
            <div className={styles.modalFooter}>
                <button className={styles.footerBtnConfirmar}>Confirmar</button>
                <button className={styles.footerBtnCancelar} onClick={() => closeModal(false)}>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default Modal