import React from 'react'
import styles from './HomePage.module.scss'
const HomePage = () => {
    return (
        <>
        <div className={styles.homeLanding}>
            <h1 className={styles.heading}>Punk and Co.</h1>
            <h2 className={styles.subheading}>A taste of rebellion</h2>
            <p className={styles.text}>Discover our complete range of beers</p>
        </div>
        </>
    )
}

export default HomePage
