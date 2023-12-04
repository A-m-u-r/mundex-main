import React from "react";
import {useState, useEffect} from 'react';
import {start} from "../d";
import styles from "./style.module.css"

function Get() {
    const url = "http://158.160.129.2/"
    const [items, setItems] = useState(start);
    useEffect(() => {
        fetch('http://158.160.129.2/api/v1/events/?verified=all')
            .then((res) => res.json())
            .then((result) => setItems(result));
    }, []);
    console.log(items)

    return (
        <div className={styles.main}>
            {items.results.map(employee => {
                return (
                    <div key={employee.id} className={styles.block}>
                        <div className={styles.img}>
                            <img className={styles.imgg} src={employee.photo} alt={" "}/>
                        </div>
                        <div className={styles.name}>{employee.name}</div>
                        <div className={styles.place}>{employee.place}</div>
                        <div className={styles.time}>{employee.date_start}</div>
                        <div className={styles.time}>{employee.time_start}</div>
                    </div>
                );
            })}
        </div>)
}


export default Get;

