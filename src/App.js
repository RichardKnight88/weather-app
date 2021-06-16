import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [weather, setWeather] = useState()

  // Spent time tracing a bug here. needed to add https:// - starting at api was working in insomnia
  const getData = async () => {
    try {
      const { data } = await axios.get('http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=dff3c764b6f0c9b9852bb2fb8f5bf85a')
      console.log(data.list[0])
      setWeather(data.list[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  console.log('WEATHER', weather)

  return (
    <>
      <h1>{weather.name}</h1>
      <h2>{Math.round(weather.main.temp)}ºC</h2>
    </>

  )
}

export default App
