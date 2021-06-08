import React from 'react';
import styles from './Nav.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Submenu from '../Submenu/Submenu';
import { useHidden } from '../Context/HiddenContext'

const Nav = () => {

  const { hidden, setHidden } = useHidden();

  const submenu = () => setHidden(hidden ? false : true)

  return (
    <>
    <div className={styles.container}>
      <div className={styles.col1}>
        <p>Nav</p>
      </div>
      <div className={styles.col2}>
        <p>Menu</p>
      </div>
      <div className={styles.col3}>
          <AccountCircleIcon color="secondary" fontSize="large"/>
          <p onClick={submenu}>invitado</p>
      </div>
    </div>
    <div className={hidden ? `animate__animated animate__bounceInRight animate__faster ${styles.noHidden}` : styles.hidden }>
      <Submenu/>
    </div>
    </>
  )
}

export default Nav;
