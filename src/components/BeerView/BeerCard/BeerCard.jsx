import React from 'react'
import styles from './BeerCard.module.scss'
const BeerCard = (props) => {
    const {name, tagline, image_url, abv, ph} = props.beer
    return (
        <div className={styles.beerCard}>
        <img className={styles.image} src={image_url} alt="" />
        <div className={styles.textWrapper}>
       <h2 className={styles.heading}>{name}</h2>
       <h3 className={styles.subheading}>{tagline}</h3>
       <p className={styles.subheading}>ABV % {abv}</p>
       <p className={styles.subheading}> PH {ph}</p>
       </div>
    </div>
    )
}

export default BeerCard
