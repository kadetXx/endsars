import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import Hero from "../../components/hero/Hero";
import Popup from "../../components/popup/Popup";

import Broadcast from "./broadcast";
import Greetings from "./greetings";
import Templates from "./TweetTemplates";
import Handles from "./Handles";
import "../../shared/gtag/";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [tweet, setTweet] = useState("");

  const randomiser = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  };

  const prepareLink = () => {
    const greeting = Greetings[randomiser(Greetings.length - 1)];
    const handle = Handles[randomiser(Handles.length - 1)];
    const template = Templates[randomiser(Templates.length - 1)];
    const fullTweet = `${greeting} ${handle}, ${template.message}`;

    if (fullTweet.length > 280) {
      prepareLink();
      return;
    }
    setTweet(encodeURI(fullTweet));
  };

  const hashtags = `SARSMUSTEND,EndSARSNow,EndSARS,EndSARSProtests`;
  const whatsappTags = `%23SARSMUSTEND %23EndSARSNow %23EndSARSProtests %23EndSARSBrutality`

  return (
    <React.Fragment>
      <Hero />
      <div className={styles.home}>
        <section className={styles.infoSection}>
          <img src='/assets/img/fist.jpg' className={styles.fistImage} alt='' />
          <h3>
            Ways you can support the <br /> #EndSARS movement
          </h3>

          <div className={styles.boxesContainer}>
            <a
              href='https://www.notion.so/b5632859ff7e4fe09d8cd73880f8aca7?v=6456a7172b9542a0b1487924766eaf7d'
              target='_blank'
              rel='noreferrer noopener'
              className={styles.infoBox}
            >
              <i className='fa fa-flag'></i>
              <h4>Join the protests</h4>
            </a>

            <a
              href={`http://twitter.com/intent/tweet?text=${tweet}&hashtags=${hashtags}`}
              target='_blank'
              rel='noreferrer noopener'
              className={styles.infoBox}
              onClick={() => prepareLink()}
            >
              <i className='fab fa-twitter'></i>
              <h4>Tweet</h4>
            </a>

            <Link to='/politicians' className={styles.infoBox}>
              <i className='fas fa-feather-alt'></i>
              <h4>Remind Politicians</h4>
            </Link>

            <p
              className={styles.infoBox}
            >
              <div className={styles.iconGroup}>
                <a
                  href={`https://api.whatsapp.com/send?phone&text=${Broadcast}${whatsappTags}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-whatsapp-square'></i>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}&quote=${Broadcast}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-facebook-square'></i>
                </a>

                <a
                  href={`https://telegram.me/share/url?url=${window.location}&text=${Broadcast}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <i className='fab fa-telegram'></i>
                </a>
              </div>

              <h4>Broadcast</h4>
            </p>
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
                  href='https://twitter.com/mrmacaronii'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @mrmacaronii
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

          {/* <section>
            <h2>
              <i className='fas fa-tshirt'></i> Buy an #EndSARS T-shirt
            </h2>
            <img className={styles.ad} src='assets/img/ad.jpg' alt='' />
          </section> */}

          <section className={styles.contributors}>
            <h2>
              <i className='fas fa-laptop-code'></i> Contributors
            </h2>
            <ul className={styles.twoColumn}>
              <li>
                <a
                  href='https://twitter.com/kadetXx'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @kadetXx
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/Niles_jamex'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @Niles_jamex
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/eniayomi_'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @eniayomi_
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/bhalow_meenat'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @bhalow_meenat
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/ridwanabiola2'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @ridwanabiola2
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/EvidenceISO'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @EvidenceISO
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/iamthepatoo'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @iamthepatoo
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/walebant'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @walebant
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/IamCradoe'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @IamCradoe
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/Mercester_'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @Mercester_
                </a>
              </li>

              <li>
                <a
                  href='https://twitter.com/a_dayomoshood'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @a_dayomoshood
                </a>
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
