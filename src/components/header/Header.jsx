import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css';

function Header( {transparent} ) {
  return (
    <header className={`${styles.header} ${transparent && styles.headerTransparent}` }>
      <div className={styles.logoContainer} >
        <h1><Link to='/'>#EndSARS</Link></h1>
      </div>

      <div className={styles.devCorner}>
        <a href="https://github.com/kadetXx/endsars" rel='noreferrer noopener'><i className='fab fa-github'></i></a>
      </div>
    </header>
  )
}

export default Header
