import React from 'react'
import BeerCard from './BeerCard'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = (props) => {
    const CardJSX = props.beers.map((item) => {
        return <BeerCard beer={item}/>;
      })
    return (
        <>
            <NavBar />
            <div className={styles.cardContainer}>
             {CardJSX}
        </div>
        </>
    )
}

export default BeerView
