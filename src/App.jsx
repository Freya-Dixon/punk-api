import React, {useState, useEffect} from 'react';

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import BeerView from './components/BeerView'
const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <BeerView/>
    </div>
  )
}

export default App
