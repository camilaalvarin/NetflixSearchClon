import React, { useState } from "react";
import Card from "../Card/Card";
import styles from './home.module.css'


function Home({ delSearch }) {

  let relatedTitles = delSearch?.map((item) => <p key={item.id}>{item.title} |</p>)
  let toShow2 = relatedTitles.slice(relatedTitles.length - 4, relatedTitles.length)
  return (
    <div className={styles.prob}>
      {
        toShow2[0] ? 
        <div className={styles.relatedTitles}>
        <p className={styles.explore}>Explore titles related to:</p>
        <div className={styles.titlesDiv}>
          <p className={styles.titles}>{toShow2[0]}</p>
          <p className={styles.titles}>{toShow2[1]}</p>
          <p className={styles.titles}>{toShow2[2]}</p>
          <p className={styles.titles}>{toShow2[3]}</p>
        </div>
      </div> :
        null
      }
      <div  className={styles.home}>
      {
        delSearch?.map((item) => <Card key={item.id} item={item} />)
      }
      </div>
      
    </div>
  );
}

export default Home;
