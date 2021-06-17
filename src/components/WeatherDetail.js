import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import WeatherCard from './WeatherCard'

const WeatherDetail = () => {

  const [weather, setWeather] = useState(null)

  const { id } = useParams()

  let windDirection = ''



  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        console.log(data)
        console.log(data.list[0])
        setWeather(data.list[0])

      } catch (err) {
        console.log('ERR', err)
        console.log('THIS IS CATCH')
        // setErrorMessage(err.response.data.errors)
      }
    }

    getData()

  }, [id])


  const checkWind = () => {
    if (weather) {
      if (weather.wind.deg >= 355 && weather.wind.deg <= 5) {
        windDirection = 'N'
      } else if (weather.wind.deg >= 85 && weather.wind.deg <= 95) {
        windDirection = 'E'
      } else if (weather.wind.deg >= 175 && weather.wind.deg <= 185) {
        windDirection = 'S'
      } else if (weather.wind.deg >= 265 && weather.wind.deg <= 275) {
        windDirection = 'W'
      } else if (weather.wind.deg > 5 && weather.wind.deg < 85) {
        windDirection = 'NE'
      } else if (weather.wind.deg > 95 && weather.wind.deg < 175) {
        windDirection = 'SE'
      } else if (weather.wind.deg > 185 && weather.wind.deg < 265) {
        windDirection = 'SW'
      } else {
        windDirection = 'NW'
      }

    }
    return windDirection
  }

  checkWind()


  return (
    <>
      {!weather ?
        <>
          <h2>It looks like we do not have records for that place, try again.</h2>
        </>

        :

        <>

          <h1>DETAILS</h1>
          <WeatherCard />


          <h2>Description: {weather.weather[0].description}</h2>
          <h2>Feels Like: {weather.main.feels_like}ºC</h2>
          <h2>Min Temp: {weather.main.temp_min}ºC</h2>
          <h2>Max Temp: {weather.main.temp_max}ºC</h2>
          <h2>Humidity: {weather.main.humidity}%</h2>


          <h2>Wind Speed: {weather.wind.speed} m/s</h2>

          <h2>Direction: {windDirection}</h2>


        </>
      }
    </>
  )

}

export default WeatherDetail