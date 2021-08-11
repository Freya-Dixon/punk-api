import React from 'react'
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <ul>
            <Link to='/home'>Home</Link>
                  <Link to='/beers'>Our Beers</Link>
            </ul>
        </div>
    )
}

export default NavBar
