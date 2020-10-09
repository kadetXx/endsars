import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import Hero from "../../components/hero/Hero";
import Popup from '../../components/popup/Popup'

function Home() {
  const [showPopup, setShowPopup] = useState(false)

  const message = encodeURI(`
  *ATTENTION* ‼️‼️

*THIS IS VERY IMPORTANT ESPECIALLY IF YOU ARE A PARENT WITH YOUTHS*
A group of law enforcement officers called SARS have been terrorizing our young people. 
If you are young, have a gadget, an interesting hairstyle (sometimes you don’t even need to have an interesting hairstyle) or a laptop bag, you’re automatically under attack. 

Young people (our brothers, sisters, friends and your children) have been extorted, beaten and even in some cases detained just for being successful. That is their only crime. In recent times, this has been on the increase and a number of deaths have been recorded, with no action from our leaders. 

So they have decided enough is enough. Joined by celebrities such as Folarin “Falz” Falana and Runtown, protests have been holding nationwide since Thursday the 8th of October, still we have no word from the presidency and no coverage from the major media houses. 

We are calling on you our parents because we know the amount of influence you wield to join forces with us to #EndSARS. End SARS not reform it. We’re tired of being extorted because we are trying to make a living, having our laptops taken from us, our phones searched and our accounts being emptied. 

You can read more about how the protests are going here https://www.zikoko.com/life/citizen/the-police-are-harassing-endsars-protesters-1/

You can also call and email our reps to make them as uncomfortable as possible, you can find their contact details here https://nigeriansenators.firebaseapp.com

Whatever you do, please don’t be silent. 
Join us to #endsars. 

We are tired of burying our friends, YOU deserve to reap the fruit of your labour over us but that won’t happen if we’re dead. 

Help us by forwarding to all your contacts and taking action 
*Help us #ENDSARS*

Yours sincerely 
A frustrated but hardworking Nigerian youth

  `);

  return (
    <React.Fragment>
      <Hero />
      <div className={styles.home}>
        <section className={styles.infoSection}>
          <img src='/assets/img/fist.jpg' alt='' />
          <h3>
            Ways you can support the <br /> #EndSARS movement
          </h3>

          <div className={styles.boxesContainer}>
            <Link to='#' className={styles.infoBox} onClick={() => setShowPopup(true)}>
              <i className='fas fa-donate'></i>
              <h4>Donate</h4>
            </Link>

            <Link to='/politicians' className={styles.infoBox}>
              <i className='fas fa-feather-alt'></i>
              <h4>Remind Politicians</h4>
            </Link>

            <a
              href={`whatsapp://send?text=${message}`}
              className={styles.infoBox}
            >
              <i className='fab fa-whatsapp-square'></i>
              <h4>Broadcast</h4>
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <section>
            <h2>
              <i className='fab fa-twitter'></i> Follow top activists
            </h2>
            <ul>
              <li>
                <a
                  href='https://twitter.com/SavvyRinu'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @savyrinuu_
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/Dehkunle'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @Dehkunle
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/falzthebahdguy'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @falzthebadguy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>
              <i className='fas fa-tshirt'></i> Buy an #EndSARS T-shirt
            </h2>
            <img className={styles.ad} src='assets/img/ad.jpg' alt='' />
          </section>

          <section>
            <h2>
              <i class='fas fa-laptop-code'></i> Contributors
            </h2>
            <ul>
              <li>
                <a
                  href='https://twitter.com/kadetXx'
                  target='_blank'
                  rel='noreferrer noopener'
                >@kadetXx</a>
              </li>
            </ul>
          </section>
        </footer>
      </div>

      {showPopup && <Popup action={setShowPopup} />}
    </React.Fragment>
  );
}

export default Home;
