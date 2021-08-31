import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'
const NavBar = () => {
    return (
        <div>
            <ul className={styles.navList}>
            <NavLink to="/" className={styles.navItem}>Home</NavLink>
            <li className={styles.heading}>Punk and Co.</li>
                  <NavLink to="/beers" className={styles.navItem}>Our Beers</NavLink>
            </ul>
        </div>
    )
}

export default NavBar


