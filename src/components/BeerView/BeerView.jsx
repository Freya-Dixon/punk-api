import React from 'react'
import BeerCard from './BeerCard'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = (props) => {

    return (
        <>
            <NavBar />
            <div className={styles.cardContainer}>         
             {props.searchBeers && props.searchBeers.map((item) => {
                return <BeerCard beer={item} />        
            })}
        </div>
        </>
    )
    }

export default BeerView
