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
    <>
      <Router>
      <Switch>
      <Route exact path="/">
      <NavBar/>
      <HomePage/>
      </Route>
      <Route path="/beers">
      <BeerView />
      </Route>
      </Switch>
      </Router>
    </>
  )
}




export default App
