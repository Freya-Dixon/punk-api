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

  const [beers, setBeers] = useState([])
  const [inputValue, setInputValue] = useState('')
 

  // display all beers on the page
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => { 
      setBeers(data) 
    console.log(data); 
    })
  }, []);

  const handlechange = (e) => {
    setInputValue(e.target.value)
  }
  // filter data with key of name to new input value
  const filterBySearch = () => {
    beers.filter(beer=> {
      return beer.name.toLowerCase().includes(inputValue.toLowerCase())
    })
  }
  
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
