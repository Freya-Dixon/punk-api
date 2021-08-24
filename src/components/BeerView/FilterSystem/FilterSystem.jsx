import React from 'react'
import styles from './FilterSystem.module.scss'
const FilterSystem = (props) => {
    return (
        <div className={styles.filterWrapper}>
            <h2 className={styles.subheading}>Filter Beers</h2>

            <div className={styles.inputTextWrapper}>
            <form action="" className={styles.inputForm}>
            <label htmlFor="" className={styles.label}>Search by name.</label>
            <input type="text" placeholder="Beer Name" className={styles.inputText}  searchBeers={props.searchBeers} filterBySearch ={props.filterBySearch} onChange={props.handlechange} />
            </form>
            </div>


            <div className={styles.checkboxesWrapper}>
            <div className={styles.inputboxWrapper}>
            <label htmlFor="" className={styles.label}>Keg Only</label>
            <input type="checkbox" className={styles.checkbox}/>
            </div>
            <div className={styles.inputboxWrapper}>
            <label htmlFor="" className={styles.label}>Classics </label>
            <input type="checkbox" className={styles.checkbox}/>
            </div>
            <div className={styles.inputboxWrapper}>
            <label htmlFor="" className={styles.label}>High ABV</label>
            <input type="checkbox" className={styles.checkbox}/>
            </div>
            </div>

            <div className={styles.rangesWrapper}>
            <label htmlFor="" className={styles.label}>ABV %</label>
            <input type="range" className={styles.range}/>
            </div>
        </div>
    )
}

export default FilterSystem
