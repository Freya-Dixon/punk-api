import React from 'react'
import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'
const NavBar = () => {
    return (
        <div>
            <ul className={styles.navList}>
            <Link to='/home' className={styles.navItem}>Home</Link>
                  <Link to='/beers' className={styles.navItem}>Our Beers</Link>
            </ul>
        </div>
    )
}

export default NavBar
