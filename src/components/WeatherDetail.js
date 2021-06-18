import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Clouds from '../assets/Clouds.png'
import Rain from '../assets/Rain.png'
import Snow from '../assets/Snow.png'
import Storm from '../assets/Storm.png'
import ClearDay from '../assets/Clear-day.png'
import ClearNight from '../assets/Clear-night.png'


import axios from 'axios'


const WeatherDetail = () => {



  const [weather, setWeather] = useState([])
  const [hasError, setHasError] = useState(false)
  const [filteredCity, setFilteredCity] = useState(null)


  const { id, weblinkId } = useParams()

  const cityId = parseInt(weblinkId)


  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        console.log('DATA', data)

        const list = data.list

        console.log('LIST', list)
        console.log('LIST TYPE', typeof (list))

        setWeather(list)

      } catch (err) {
        setHasError(true)
        console.log('ERROR', err)
      }
    }

    getData()

  }, [])

  console.log('WEATHER', weather)
  console.log('WEATHER TYPE', typeof (weather))


  useEffect(() => {

    const filterCity = () => {
      if (weather.length > 0) {
        const grabCity = weather.filter(city => {
          if (city.id === cityId) {
            return city
          }
        })
        setFilteredCity(grabCity)
        console.log('GRAB CITY', grabCity)
      }

    }

    filterCity()

  }, [weather, hasError, weblinkId])


  console.log('FILTERED CITY', filteredCity)

  // const logic = () => {
  //   if (filteredCity) {
  //     filteredCity = weather[0].main
  //     if (weatherStatus === 'Clouds') {
  //       imageLink = Clouds
  //     }
  //     if (weatherStatus === 'Rain') {
  //       imageLink = Rain
  //     }
  //     if (weatherStatus === 'Clear') {
  //       if (parseInt(time) < 16 && parseInt(time) > 6) {
  //         imageLink = ClearDay
  //       } else {
  //         imageLink = ClearNight
  //       }
  //     }
  //     if (weatherStatus === 'Snow') {
  //       imageLink = Snow
  //     }
  //     if (weatherStatus === 'Storm') {
  //       imageLink = Storm
  //     }
  //     return imageLink
  //   }
  // }

  // logic()


  if (!filteredCity) return null



  return (

    <>
      <section className={`section hero is-fullheight-with-navbar ${filteredCity[0].weather[0].main}`}>

        {filteredCity.length < 1 ?
          <h2 className=" has-text-centered errorBlock">
            {hasError ? 'Oops, it looks like we do not have records for that city. Please click here to search again' : 'Loading...'}
          </h2>
          :
          <>

            <div className="container detailedPage">
              {/* <WeatherCard className="is-fullwidth" /> */}
              <>
                <section className="section detailHalf">
                  <div className="container">
                    <div className="columns">
                      <div className="column is-fullwidth">
                        <div className="card">
                          <>
                            <div className="card-header">
                              <div className="card-header-title">Detailed Information</div>
                            </div>
                            <>
                              <div className="card-content">
                                <>
                                  <div className="card-header-title is-2">Condtions</div>
                                  <h2>{filteredCity[0].weather[0].description}</h2>
                                </>
                              </div>
                              <div className="card-content">
                                <>
                                  <div className="card-header-title is-2">Temperature</div>
                                  <h2>Feels Like: {filteredCity[0].main.feels_like}ºC</h2>
                                  <h2>Min Temp: {filteredCity[0].main.temp_min}ºC</h2>
                                  <h2>Max Temp: {filteredCity[0].main.temp_max}ºC</h2>
                                  <h2>Humidity: {filteredCity[0].main.humidity}%</h2>
                                </>
                              </div>
                              <div className="card-content">
                                <>
                                  <div className="card-header-title is-2">Wind Speed</div>
                                  <h2>{filteredCity[0].wind.speed} m/s</h2>
                                </>
                              </div>
                            </>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </div>
          </>
        }
      </section>
    </>

  )
}

export default WeatherDetail