import React from 'react'
import BeerCard from './BeerCard'
import NavBar from '../NavBar'
import styles from './BeerView.module.scss'
const BeerView = (props) => {
    let CardJSX = [""];

    // if (props.inputValue.length > 0) {
    //    CardJSX = props.beers.map((item) => {
    //         return < BeerCard beer={item} />
    //       })
    //     }
    //       else {
    //         CardJSX = props.beers.map((item) => {
    //             return <BeerCard beer={item} />        
    //         })
    //     }
    return (
        <>
            <NavBar />
            <div className={styles.cardContainer}>
             {/* {CardJSX} */}
            
             {props.searchBeers && props.searchBeers.map((item) => {
                return <BeerCard beer={item} />        
            })}
        </div>
        </>
    )
    }

export default BeerView
