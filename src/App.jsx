import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import BeerView from './components/BeerView'
const App = () => {
  return (
    <div>
      <Router>
      <Switch>
      <Route excat path='/'>
      <NavBar/>
      <HomePage/>
      </Route>
      </Switch>
      <Route path='/beers'>
      <BeerView/>
      </Route>
      </Router>
      {/* <Router>
            <HomeNav />
             <Switch>
             <Route path='/home'>
            <HomePage />
            </Route>
            </Switch>
            </Router>
            < NavBar handlechange={handlechange} />  */}
    </div>
  )
}

export default App
