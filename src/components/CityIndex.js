import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import WeatherCard from './WeatherCard'



const CityIndex = () => {

  const [weather, setWeather] = useState([])

  // const [hasError, setHasError] = useState(false)

  const { id } = useParams()




  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${id}&units=metric&appid=${process.env.REACT_APP_API_ACCESS_TOKEN}`)

        // console.log(data)
        // console.log(data.list)
        setWeather(data.list)


      } catch (err) {
        console.log('ERR', err)
        // console.log('THIS IS CATCH')
        // setHasError(true)
        // setErrorMessage(err.response.data.errors)
      }
    }


    getData()

  }, [id])






  return (

    <section className="section hero is-fullheight-with-navbar">

      <div className="container">

        {weather.length > 0 ?

          <div className="columns is-multiline">

            {weather.map(city => {
              return (
                <WeatherCard key={city.id} {...city} />
              )
            })
            }

          </div>

          :

          <Link to="/search">

            <h2 className=" has-text-centered">
              {'Oops, it looks like we do not have records for that city. Please click here to search again'}</h2>

          </Link>

        }
        
      </div>

    </section>

  )
}

export default CityIndex