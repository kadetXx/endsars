import React, { useState, useEffect } from "react";
import styles from "./Politician.module.css";

function Politician({ name, state, email, phone }) {
  const [device, setDevice] = useState("");

  useEffect(() => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      setDevice("Windows Phone");
    }
    if (/android/i.test(userAgent)) {
      setDevice("Android");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDevice("iOS");
    }
    setDevice("unknown");
  }, []);

  const subject = "#EndSARS - End SARS!";

  const message = encodeURI(
    "Dear sir/ma, I am  a concerned citizen of your constituent, and I'll like to express my displeasure about SARS. The members of this squad who are supposed to protect us against armed robbery are killing, extorting and harassing us everyday. We are scared to move freely and we need your help. I urge you, distinguished, to use your office to protect the lives of Nigerian youths as we are the future of the Nation. We are counting on you to do the right thing. We are counting on you to help us #ENDSARS. Thanks!"
  );

  return (
    <div className={styles.politician}>
      <div className={styles.title}>
        <h2> {name} </h2>
      </div>

      <p>
        <b>
          <i className='fas fa-map-marker-alt'></i>
        </b>{" "}
        <span>{state}</span>
      </p>

      {email ? (
        <React.Fragment>
          <a
            href={`mailto:${email}?subject=${subject}&body=${message}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <b>
              <i className='fas fa-envelope'></i>
            </b>
            <span>{email}</span>
          </a>
        </React.Fragment>
      ) : (
        <p>
          <b>
            <i className='fas fa-envelope'></i>
          </b>
          <span>Not available</span>
        </p>
      )}

      {phone ? (
        <React.Fragment>
          {device === "IOS" ? (
            <a href={`sms:${phone}&body=${message}`}>
              <b>
                <i className='fas fa-phone'></i>
              </b>
              <span>{phone}</span>
            </a>
          ) : (
            <a href={`sms:${phone}?body=${message}`}>
              <b>
                <i className='fas fa-phone'></i>
              </b>
              <span>{phone}</span>
            </a>
          )}
        </React.Fragment>
      ) : (
        <p>
          <b>
            <i className='fas fa-phone'></i>
          </b>
          <span>Not available</span>
        </p>
      )}
    </div>
  );
}

export default Politician;
