import React from 'react'
import BeerCard from './BeerCard'
import FilterSystem from './FilterSystem'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = () => {
    return (
        <>
            <NavBar />
            <section className={styles.beerSection}>
                <h1 className={styles.beerHeading}>Our Beers</h1>
            <FilterSystem />
       
        </section>
        </>
    )
}

export default BeerView
