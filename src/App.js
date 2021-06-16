import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'


function App() {

  

  return (

    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route path="/weather">
          <WeatherCard />
        </Route>

      </Switch>

    </BrowserRouter>

  )
}

export default App
