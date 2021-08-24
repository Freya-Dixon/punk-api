import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import BeerView from './components/BeerView'
import FilterSystem from './components/BeerView/FilterSystem';
const App = () => {

  const [beers, setBeers] = useState([])
  const [searchBeers, searchsetBeers] = useState([])
  const [inputValue, setInputValue] = useState("")
 


  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => { 
      setBeers(data) 
      searchsetBeers(data)
    })
  }, []);


  const handlechange = (e) => {
    setInputValue(e.target.value)
  }
  // filter data with key of name to new input value
  const filterBySearch = () => {
    const filteredBeers = beers.filter(searchBeer => {
    return searchBeer.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    searchsetBeers(filteredBeers)
  }
  
  useEffect(() => {
  filterBySearch()
  },[inputValue])


  return (
    <>
      <Router>
      <Switch>
      <Route exact path="/">
      <NavBar/>
      <HomePage/>
      </Route>
      <Route path="/beers">
      {  beers && < BeerView  beers={beers} inputValue={inputValue} searchBeers={searchBeers} /> }
       < FilterSystem handlechange={handlechange} filterBySearch ={filterBySearch} />
      </Route>
      </Switch>
      </Router>
    </>
  )
}




export default App
