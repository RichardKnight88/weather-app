import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WeatherCard from './components/WeatherCard'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {



  return (

    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route excact path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/weather">
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
