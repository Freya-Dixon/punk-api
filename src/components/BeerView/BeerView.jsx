import React from 'react'
import BeerCard from './BeerCard'
import FilterSystem from './FilterSystem'
import NavBar from '../NavBar'
const BeerView = () => {
    return (
        <div>
            <NavBar />
            <FilterSystem />
            <h1>Our Beers</h1>
            <BeerCard />
        </div>
    )
}

export default BeerView
