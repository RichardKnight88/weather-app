import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


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
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        // console.log('DATA', data)

        const list = data.list

        // console.log('LIST', list)
        // console.log('LIST TYPE', typeof (list))

        setWeather(list)

      } catch (err) {
        setHasError(true)
        // console.log('ERROR', err)
      }
    }

    getData()

  }, [id])

  // console.log('WEATHER', weather)
  // console.log('WEATHER TYPE', typeof (weather))


  useEffect(() => {

    const filterCity = () => {
      if (weather.length > 0) {
        const grabCity = weather.filter(city => {
          if (city.id === cityId) {
            return city
          }
        })
        setFilteredCity(grabCity)
        // console.log('GRAB CITY', grabCity)
      }

    }

    filterCity()

  }, [weather, hasError, weblinkId, cityId])



  if (!filteredCity) return null



  return (

    <>
      <section className={`section hero is-fullheight-with-navbar ${filteredCity[0].weather[0].main}`}>


        <div className="container card detailedPage">

          {filteredCity.length < 1 ?

            <h2 className=" has-text-centered errorBlock">
              {hasError ? 'Oops, it looks like we do not have records for that city. Please search again' : 'Loading...'}
            </h2>

            :

            <>

              <div className="columns">

                <div className="column">

                  <div className="card-header-title">
                    {filteredCity[0].name}, {filteredCity[0].sys.country}
                  </div>

                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src={`/${filteredCity[0].weather[0].main}.png`} alt={`${filteredCity[0].weather[0].main} icon`} />
                    </figure>
                  </div>

                  <div className="card-content">
                    <>
                      <div className="card-header-title is-2">Condtions</div>
                      <h2>{filteredCity[0].weather[0].description}</h2>
                    </>
                  </div>

                  <>

                    <div className="card-header-title is-1">Detailed Information
                    </div>

                    <>

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

            </>

          }

        </div>

      </section>

    </>

  )
}

export default WeatherDetail