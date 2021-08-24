import React from 'react'
import BeerCard from './BeerCard'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = (props) => {
    let CardJSX = [""];

    if (props.inputValue) {
       CardJSX = props.searchBeers.map((item) => {
            return < BeerCard beer={item} />
          })
        }
          else {
            CardJSX = props.beers.map((itemTwo) => {
                return <BeerCard beer={itemTwo} />        
            })
        }
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
