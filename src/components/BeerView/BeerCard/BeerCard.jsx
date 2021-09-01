import React from 'react'
import styles from './BeerCard.module.scss'
const BeerCard = (props) => {
    const {name, tagline, image_url, abv, ph} = props.beer
    return (
        <div className={styles.card}>
        <img className={styles.card__image} src={image_url} alt="" />
        <div className={styles.card__description}>
       <h2 className={styles.card__title}>{name}</h2>
       <h3 className={styles.card__subtitle}>{tagline}</h3>
       <p className={styles.card__subtitle}>ABV % {abv}</p>
       <p className={styles.card__subtitle}> PH {ph}</p>
       </div>
    </div>
    )
}

export default BeerCard
