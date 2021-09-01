import React from 'react'
import styles from './FilterSystem.module.scss'
const FilterSystem = (props) => {
    return (
        <div className={styles.filterSystem}>
            <h2 className={styles.subtitle}>Filter Beers</h2>

            <div className={styles.inputTextWrapper}>
            <form action="" className={styles.form}>
            <label htmlFor="" className={styles.label}>Search by name.</label>
            <input type="text" placeholder="Beer Name" className={styles.form__input}  searchBeers={props.searchBeers} filterBySearch ={props.filterBySearch} onChange={props.handlechange} />
            </form>
            </div>
            <div className={styles.btn__container}>
            <div className={styles.form__btn__wrapper}>
            <button className={styles.filterSystem__btn} onClick={props.filterByType}>Keg Only</button>
            </div>
            <div className={styles.form__btn__wrapper}>
            <button className={styles.filterSystem__btn} onClick={props.filterByABV}>High ABV</button>
            </div>
            <div className={styles.form__btn__wrapper}>
            <button className={styles.filterSystem__btn} onClick={props.filterByPh}>Acidic</button>
            </div>
            </div>
        </div>
    )
}

export default FilterSystem
