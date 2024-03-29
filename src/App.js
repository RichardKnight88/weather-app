import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import CityIndex from './components/CityIndex'
import Searchbar from './components/Searchbar'
import WeatherDetail from './components/WeatherDetail'
import Favourites from './components/Favourites'

function App() {



  return (

    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route path="/:id/:weblinkId">
          <WeatherDetail />
        </Route>

        <Route path="/favourites">
          <Favourites />
        </Route>

        <Route path="/search">
          <Searchbar />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/:id">
          <CityIndex />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </BrowserRouter>

  )
}

export default App
