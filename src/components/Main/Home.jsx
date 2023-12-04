import React, {useState} from "react";
import Get from "../Get";
import styles from "./style.module.css"
import {start} from "../d";
import Month from "../Month";
import func from "../Create";
import Create from "../Create";

function Home() {
    const [bloc, setBloc] = useState();

  return (
      <div className={styles.top}>
          <div className={styles.editmonth}><Month/></div>
    <div className={styles.contact}>
        <Get setBloc={setBloc} bloc={bloc}/>
    </div></div>
  );
}

export default Home;
