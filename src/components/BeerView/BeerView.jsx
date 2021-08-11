import React from 'react'
import BeerCard from './BeerCard'
import FilterSystem from './FilterSystem'
const BeerView = () => {
    return (
        <div>
            <FilterSystem />
            <h1>Our Beers</h1>
            <BeerCard />
        </div>
    )
}

export default BeerView
