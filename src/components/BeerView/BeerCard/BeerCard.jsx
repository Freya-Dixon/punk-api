import React from 'react'
import styles from './BeerCard.module.scss'
const BeerCard = (props) => {
    const {name, tagline, image_url} = props.beer
    return (
        <div className={styles.beerCard}>
        <img className={styles.image} src={image_url} alt="" />
        <div className={styles.textWrapper}>
       <h2 className={styles.heading}>{name}</h2>
       <p className={styles.subheading}>{tagline}</p>
       </div>
    </div>
    )
}

export default BeerCard
