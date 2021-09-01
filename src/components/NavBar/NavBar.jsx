import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'
const NavBar = () => {
    return (
        <div>
            <ul className={styles.nav}>
            <NavLink to="/" className={styles.nav__item}>Home</NavLink>
            <li className={styles.nav__title}>Punk and Co.</li>
                  <NavLink to="/beers" className={styles.nav__item}>Our Beers</NavLink>
            </ul>
        </div>
    )
}

export default NavBar


