import React from 'react'
import styles from './Hero.module.css'
import Typewriter from '../typewriter/index'
import { crimeKeywords } from '../../mockData'

import Header from '../header/Header'

function Hero( ) {
  return (
    <div className={styles.hero}>
      <Header transparent={true} />
      <div className={styles.caption} >
        <h2> Stop <Typewriter texts={ crimeKeywords } />!
          <br/><br/> Let Our Voices be Heard! <br/> <span>#EndSARSNow!</span> </h2>
          <a 
            className={ styles.cta } 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/b5632859ff7e4fe09d8cd73880f8aca7?v=6456a7172b9542a0b1487924766eaf7d">
            Join the protest </a>
      </div>
    </div>
  )
}

export default Hero
