import React from 'react'
import BeerCard from './BeerCard'
import FilterSystem from './FilterSystem'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = (props) => {
    const CardJSX = props.beers.map((item) => {
        return <BeerCard beer={item}/>;
      })
    return (
        <>
            <NavBar />
            <section className={styles.beerSection}>
            <FilterSystem />
            <div className={styles.cardContainer}>
             {CardJSX}
        </div>
            
        </section>
        </>
    )
}

export default BeerView
