import React, { useState } from "react";
import styles from "./Complaint.module.css";
import Header from "../../components/header/Header";

// import TweetEmbed from "react-tweet-embed";
import messages from "./messages";

import "../../shared/gtag";

function Complaint() {
  const [mail, setMail] = useState();

  const subject = `Complaint On Amb. Hussaini Coomasie's #EndSARS Comments`;

  const randomiser = (max) => {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  };

  const prepareLink = () => {
    const message = messages[randomiser(messages.length - 1)];
    const mailDetail = `?subject=${subject}&body=${message}`;

    setMail(mailDetail);
  };

  return (
    <div className={styles.politicians}>
      <Header transparent={false} />

      <main>
        {/* <div className={styles.tweetContainer}>
          <TweetEmbed id='1317256669848608770' options={{ theme: "dark" }} />
        </div> */}

        <div className={styles.textContainer}>
          <h3>Brief Info</h3>
          <p>
            <a
              href='https://twitter.com/DeleFarotimi/status/1317256669848608770?s=20'
              target='_blank'
              rel='noreferrer noopener'
            >
              This video here
            </a> {" "}
            was posted on twitter and shows a man (Amb. H. Coomassie) talking
            down on the #EndSARS campaign. Thanks to {" "}
            <a
              href='https://twitter.com/chika_jones'
              target='_blank'
              rel='noreferrer noopener'
            >
              chika jones
            </a>
            , we have a few details about him including contacts of companies he
            works for.
          </p>

          <p>
            Below are links to help lodge a complaint to these companies. Send
            mails or phone calls with a click and let them know that the
            Nigerian youths are not pleased with their employee's statement
          </p>

          <div className={styles.linksContainer}>
            <ul>
              <li>
                <i className='fas fa-envelope'></i>
                <a
                  href={`mailto:${"weyler@daad.de"}${mail}`}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={() => prepareLink()}
                >
                  weyler@daad.de
                </a>
              </li>

              <li>
                <i className='fas fa-envelope'></i>
                <a
                  href={`mailto:${"rothenpieler@daad.de"}${mail}`}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={() => prepareLink()}
                >
                  rothenpieler@daad.de
                </a>
              </li>

              <li>
                <i className='fas fa-envelope'></i>
                <a
                  href={`mailto:${"martin.adelmann@abi.uni-freiburg.de"}${mail}`}
                  target='_blank'
                  rel='noreferrer noopener'
                  onClick={() => prepareLink()}
                >
                  martin.adelmann@abi.uni-freiburg.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Complaint;
