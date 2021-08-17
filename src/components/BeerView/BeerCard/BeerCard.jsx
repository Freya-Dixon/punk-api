import React from 'react'
import styles from './BeerCard.module.scss'
const BeerCard = (props) => {
    const {name, description, image_url} = props.beer
    return (
        <div className={styles.beerCard}>
        <img className={styles.image} src={image_url} alt="" />
       <h2 className={styles.heading}>{name}</h2>
       <p className={styles.text}>{description}</p>
        
    </div>
    )
}

export default BeerCard
