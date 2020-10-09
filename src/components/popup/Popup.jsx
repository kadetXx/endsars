import React from "react";
import styles from './Popup.module.css'

function Popup({ action }) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <i className='fas fa-donate'></i>
        <h2 className='heading'> Donate To Feed Protesters </h2>
        <p><b>ACCT NAME:</b> -</p>
        <p><b>ACCT NO:</b> -</p>
        <p><b>BANK:</b> -</p>
       
        <button className='secondary' onClick={() => [action(false), navigator.clipboard.writeText('-')]}>
          Copy to clipboard
        </button>
        
      </div>
    </div>
  );
}

export default Popup;