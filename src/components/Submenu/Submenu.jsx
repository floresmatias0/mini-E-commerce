import React from 'react';
import styles from './Submenu.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import ModalComprar from '../ModalComprar/ModalComprar';
import { useHidden } from '../Context/HiddenContext'

const Submenu = (props) => {

  const { hiddenV2,carrito} = useHidden();

  return (
    <>
    <div className={styles.container}>
      <ul>
        <li onClick={carrito}><p>Carrito</p> <ShoppingCartIcon color="secondary" fontSize="large"/></li>
        <li><p>Ajustes</p> <BuildIcon color="secondary" fontSize="large"/></li>
      </ul>
    </div>
    <div className={hiddenV2 ?
      `animate__animated animate__bounceInDown animate__faster ${styles.noHiddenV2}` :
      `animate__animated animate__backOutUp ${styles.hiddenV2}` }>
      <ModalComprar/>
    </div>
    </>
  )
}

export default Submenu;
