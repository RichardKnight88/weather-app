import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Clouds from '../assets/Clouds.png'
import Rain from '../assets/Rain.png'
import Snow from '../assets/Snow.png'
import Storm from '../assets/Storm.png'
import ClearDay from '../assets/Clear-day.png'
import ClearNight from '../assets/Clear-night.png'

const WeatherCard = () => {

  const [weather, setWeather] = useState(null)

  const [unixTime, setUnixTime] = useState('')

  // const [errorMessage, setErrorMessage] = useState('')

  const [hasError, setHasError] = useState(false)

  let imageLink = ''

  let weatherStatus = ''


  const { id } = useParams()

  // const imageArray = [{ 'Clouds': Clouds }, { 'Clear': Clear }]

  // const { Clouds: Clouds}

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        console.log(data)
        console.log(data.list[0])
        setWeather(data.list[0])
        // if (!weather){
        //   console.log('inside if')
        //   window.alert('mae there is not such a city try again')
        // } else {
        setUnixTime(data.list[0].dt)
        // }


      } catch (err) {
        console.log('ERR', err)
        console.log('THIS IS CATCH')
        setHasError(true)
        // setErrorMessage(err.response.data.errors)
      }
    }


    getData()

  }, [id])

  // console.log('WEATHER DESCRIPTION!!!', weather.weather[0].main)


  console.log('IMAGE LINK', imageLink)


  console.log('UNIXTIME', unixTime)

  console.log('WEATHER', weather)
  const unixDate = new Date(unixTime * 1000)
  const date = unixDate.toDateString()
  const time = unixDate.toLocaleTimeString([], { timeStyle: 'short' })

  console.log(unixDate.toDateString())
  console.log(unixDate.toLocaleTimeString([], { timeStyle: 'short' }))

  const logic = () => {
    if (weather) {
      weatherStatus = weather.weather[0].main
      if (weather.weather[0].main === 'Clouds') {
        imageLink = Clouds
      }
      if (weather.weather[0].main === 'Rain') {
        imageLink = Rain
      }
      if (weather.weather[0].main === 'Clear') {
        if (parseInt(time) < 16 && parseInt(time) > 6) {
          imageLink = ClearDay
        } else {
          imageLink = ClearNight
        }
      }
      if (weather.weather[0].main === 'Snow') {
        imageLink = Snow
      }
      if (weather.weather[0].main === 'Storm') {
        imageLink = Storm
      }
      return imageLink
    }
  }

  console.log('TIME', parseInt(time))

  console.log(typeof (logic()))


  return (

    <section className={`section hero is-fullheight-with-navbar ${weatherStatus}`}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="card">
              <>
                {!weather ?

                  <Link to="/search"><h2 className=" has-text-centered">
                    {hasError ? 'Oops, it looks like we do not have records for that city. Please search again' : 'Loading...'}
                  </h2>
                  </Link>
                  :



                  <>

                    <Link to={`/${id}/detail`}>
                      <div className="card-header">
                        <div className="card-header-title">
                          {weather.name}</div>
                      </div>

                      <div className="card-content">
                        <h2>{date} {time}</h2>
                      </div>

                      <div className="card-image">
                        <figure className="image">
                          <img src={imageLink} alt="test" />
                        </figure>
                      </div>

                      <div className="card-content">
                        <h2>{weather.weather[0].main}</h2>
                      </div>

                      <div className="card-content">
                        <h2>{Math.round(weather.main.temp)}ºC</h2>
                      </div>
                    </Link>

                  </>
                }
              </>
            </div>
          </div>
        </div>
      </div>
    </section >

  )

}

export default WeatherCard
