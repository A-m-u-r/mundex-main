import React from "react";
import {NavLink} from "react-router-dom";
import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styles from "./style.module.css"
import Month from "../Month";


function Navigation() {
    return (<div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.block}>
                <NavLink className={styles.afisha} to="/">
                    Афиша
                </NavLink>

                <div className={styles.wrapper}>
                    <div className={styles.search_box}>
                        <input type="text" placeholder="  Куда сходить?" className={styles.input} />
                        <i className={styles.fasearch}></i>
                    </div>
                </div>

                <div className={styles.menu}>
                    <Menu menuButton={<MenuButton className={styles.roun} ></MenuButton>} transition>
                        <MenuItem><NavLink className="nav-link" to="/contact">
                            Мероприятия
                            <span className="sr-only">(current)</span>
                        </NavLink></MenuItem>

                        <MenuItem><NavLink className="nav-link" to="/about">
                            Предложить мероприятие
                            <span className="sr-only">(current)</span>
                        </NavLink></MenuItem>



                        <MenuItem> <NavLink className="nav-link" to="/">
                        Портфолио
                    </NavLink></MenuItem>

                    </Menu>
                </div>
            </div>
        </div>
        <div className={styles.text}> <div className={styles.textIn}>Мероприятия <br/> от студентов - студентам <br/> И не только</div> </div>
    </div>
    );
}

export default Navigation;
