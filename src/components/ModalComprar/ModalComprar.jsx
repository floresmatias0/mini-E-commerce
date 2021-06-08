import React from 'react';
import styles from './ModalComprar.module.css';
import { useHidden } from '../Context/HiddenContext';

const ModalComprar = (props) => {

  const {carrito} = useHidden();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
          <button className={styles.close} onClick={carrito}>x</button>
        <div className={styles.content}>
          <p>Carrito</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalComprar;
