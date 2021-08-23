import React from 'react'
import { useParams, Link } from 'react-router-dom'


const WeatherCard = ({ id, name, main, dt, weather, sys }) => {



  // const [hasError, setHasError] = useState(false)




  const { id: weblinkId } = useParams()


  // console.log('WEATHER', weather)
  const unixDate = new Date(dt * 1000)
  const date = unixDate.toDateString()
  const time = unixDate.toLocaleTimeString([], { timeStyle: 'short' })


  // console.log('TIME', parseInt(time))

  // console.log(typeof (logic()))


  return (

    <>

      <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">

        <Link to={`/${weblinkId}/${id}`}>
          <div className="card">


            <div className="card-header">
              <div className="card-header-title">
                {name}, {sys.country}</div>
            </div>

            <div className="card-content">
              <h2>{date} {time}</h2>
            </div>

            <div className="card-image">
              <figure className="image is-1by1">
                <img src={`${weather[0].main}.png`} alt={`${weather[0].main} icon`} />
              </figure>
            </div>

            <div className="card-content">
              <h2>{weather[0].description}</h2>
            </div>

            <div className="card-content">
              <h2>{Math.round(main.temp)}ºC</h2>
            </div>


          </div>
        </Link>

      </div>
    </>


  )

}

export default WeatherCard
