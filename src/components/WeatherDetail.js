import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import WeatherCard from './WeatherCard'

const WeatherDetail = () => {

  const [weather, setWeather] = useState([])

  const [hasError, setHasError] = useState(false)

  const { id, weblinkId } = useParams()

  const cityId = parseInt(weblinkId)


  let windDirection = ''

  let allCities = []

  let cityDetail = []

  console.log('IDS', id, weblinkId, cityId)
  console.log('TYPE OF WEATHER BEFORE STATE', typeof (weather))


  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        console.log('DATA', data)
        // console.log(data.list[0])
        const { list } = data
        console.log('LIST', list[0])
        // console.log('LIST TYPE', typeof(list))

        const dataValues = Object.values(data.list)
        // const listValues = Object.values(dataValues)

        console.log('DATA VALUES ARRAY>>>', dataValues)
        // console.log('LIST VALUES ARRAY>>>', listValues)

        setWeather(list)

      } catch (err) {
        console.log('ERR', err)
        console.log('THIS IS CATCH')
        setHasError(true)
        // setErrorMessage(err.response.data.errors)
      }
    }

    getData()

  }, [id])

  // console.log('WEATHER!!!!!', weather)
  // console.log('WEATHER ZERO>>>>', weather[0])

  // const checkWind = () => {
  //   if (cityDetail) {
  //     if (cityDetail.wind.deg >= 355 && cityDetail.wind.deg <= 5) {
  //       windDirection = 'N'
  //     } else if (cityDetail.wind.deg >= 85 && cityDetail.wind.deg <= 95) {
  //       windDirection = 'E'
  //     } else if (cityDetail.wind.deg >= 175 && cityDetail.wind.deg <= 185) {
  //       windDirection = 'S'
  //     } else if (cityDetail.wind.deg >= 265 && cityDetail.wind.deg <= 275) {
  //       windDirection = 'W'
  //     } else if (cityDetail.wind.deg > 5 && cityDetail.wind.deg < 85) {
  //       windDirection = 'NE'
  //     } else if (cityDetail.wind.deg > 95 && cityDetail.wind.deg < 175) {
  //       windDirection = 'SE'
  //     } else if (cityDetail.wind.deg > 185 && cityDetail.wind.deg < 265) {
  //       windDirection = 'SW'
  //     } else {
  //       windDirection = 'NW'
  //     }

  //   }
  //   console.log('CITY DETAIL', cityDetail)
  //   return windDirection
  // }

  // setWeather(weather[0])


  return (
    <>

      {weather.length < 1 ?

        <h2 className=" has-text-centered errorBlock">
          {hasError ? 'Oops, it looks like we do not have records for that city. Please click here to search again' : 'Loading...'}
        </h2>

        :

        <>
          {console.log('TYPE OF WEATHER AFTER STATE!!!!!', typeof (weather))}
          {/* {allCities = weather.list} */}
          {console.log('ALL CITIES', allCities)}
          {console.log('ALL CITIES', typeof (allCities))}
          {console.log('WEATHER!!!!!', weather)}
          {console.log('WEATHER ZERO>>>>', weather[0])}

          {/* {weather.map(city => {
            cityDetail.push(city)
            return
          } 
          )} */}

          {cityDetail =  [...weather] }
          {console.log('CITY', cityDetail)}
          {/* {cityDetail = cityDetail} */}
          {console.log('CITY', cityDetail)}


          {cityDetail = cityDetail.filter(city => {
            console.log('CITY ID', city.id, 'WEBLINK ID', cityId)
            if (city.id === cityId) {
              console.log('YESSSS')
              return { ...city }
            } return
          })}

          {cityDetail = cityDetail[0]}
          {console.log('CITY AFTER FILTER', cityDetail)}
          {console.log('CITY TYPE', typeof (cityDetail))}
          {/* {console.log('CITY', cityDetail)} */}
          {/* {console.log('CITY TYPE', typeof (cityDetail))} */}
          {/* {checkWind()} */}


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
                                <h2>{cityDetail.weather[0].description}</h2>
                              </>
                            </div>

                            <div className="card-content">
                              <>
                                <div className="card-header-title is-2">Temperature</div>
                                <h2>Feels Like: {cityDetail.main.feels_like}ºC</h2>
                                <h2>Min Temp: {cityDetail.main.temp_min}ºC</h2>
                                <h2>Max Temp: {cityDetail.main.temp_max}ºC</h2>
                                <h2>Humidity: {cityDetail.main.humidity}%</h2>
                              </>
                            </div>

                            <div className="card-content">
                              <>
                                <div className="card-header-title is-2">Wind Speed</div>
                                <h2>{cityDetail.wind.speed} m/s</h2>
                                {/* <h2>Direction: {windDirection}</h2> */}
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

    </>
  )

}

export default WeatherDetail