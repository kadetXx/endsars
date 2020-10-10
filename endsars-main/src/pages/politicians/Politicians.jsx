import React, { useState, useEffect } from "react";
import styles from "./Politicians.module.css";
import Header from "../../components/header/Header";

import senators from "./Senators";
import Politician from "../../components/politician/Politician";

function Politicians() {
  const [allPoliticians, setAllPoliticians] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setAllPoliticians([...senators]);
  }, []);

  const search = (e) => {
    e.preventDefault();
    console.log('working');

    const results = [...senators].filter((item) => {
      return (
        item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.state.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });

    setAllPoliticians([...results]);

    query === '' && setAllPoliticians([...senators])
  };

  return (
    <div className={styles.politicians}>
      <Header transparent={false} />

      <main>
        <div className={styles.search}>
          <form>
            <label>
              <i className='fas fa-search'></i>
              <input
                type='text'
                // value={query}
                onChange={e => [setQuery(e.target.value), search(e)]}
                placeholder='Search politicians by name/state'
              />
            </label>
          </form>
        </div>

        <div className={styles.gridContainer}>
          {allPoliticians.map((item) => (
            <Politician
              key={item.id}
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
