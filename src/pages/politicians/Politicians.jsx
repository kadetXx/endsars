import React, { useState, useEffect } from "react";
import styles from "./Politicians.module.css";
import Header from "../../components/header/Header";

import senators from "./Senators";
import Politician from "../../components/politician/Politician";
import "../../shared/gtag/";

const prependUniqueLettersToId = (id = Math.floor(Math.random() * 10000)) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text + id;
};

function Politicians() {
  const [allPoliticians, setAllPoliticians] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setAllPoliticians([...senators]);
  }, []);

  const search = (e) => {
    e.preventDefault();

    const results = [...senators].filter((item) => {
      return (
        item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.state.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });

    setAllPoliticians([...results]);

    query === "" && setAllPoliticians([...senators]);
  };

  return (
    <div className={styles.politicians}>
      <Header transparent={false} />

      <main>
        <div className={styles.search}>
          <form>
            <label>
              <i className="fas fa-search"></i>
              <input
                type="text"
                // value={query}
                onChange={(e) => [setQuery(e.target.value), search(e)]}
                placeholder="Search politicians by name/state"
              />
            </label>
          </form>
        </div>

        <div className={styles.gridContainer}>
          {allPoliticians.map((item) => (
            <Politician
              key={prependUniqueLettersToId(item.id)}
              name={item.name}
              state={item.state}
              email={item.email}
              phone={item.phoneNo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Politicians;
