import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import WeatherCard from './components/WeatherCard'
import Searchbar from './components/Searchbar'
import WeatherDetail from './components/WeatherDetail'

function App() {



  return (

    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route path="/:id/detail">
          <WeatherDetail />
        </Route>

        <Route excact path="/search">
          <Searchbar />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/:id">
          <WeatherCard />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </BrowserRouter>

  )
}

export default App
