import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Clouds from '../assets/Clouds.png'
import Rain from '../assets/Rain.png'
import Snow from '../assets/Snow.png'
import Storm from '../assets/Storm.png'
import ClearDay from '../assets/Clear-day.png'
import ClearNight from '../assets/Clear-night.png'

const WeatherCard = ({ id, name, main, dt, weather, sys }) => {



  // const [hasError, setHasError] = useState(false)

  let imageLink = ''

  let weatherStatus = ''


  const { id: weblinkId } = useParams()


  // console.log('WEATHER', weather)
  const unixDate = new Date(dt * 1000)
  const date = unixDate.toDateString()
  const time = unixDate.toLocaleTimeString([], { timeStyle: 'short' })

  // console.log(unixDate.toDateString())
  // console.log(unixDate.toLocaleTimeString([], { timeStyle: 'short' }))

  const logic = () => {
    if (name) {
      weatherStatus = weather[0].main
      if (weatherStatus === 'Clouds') {
        imageLink = Clouds
      }
      if (weatherStatus === 'Rain') {
        imageLink = Rain
      }
      if (weatherStatus === 'Clear') {
        if (parseInt(time) < 16 && parseInt(time) > 6) {
          imageLink = ClearDay
        } else {
          imageLink = ClearNight
        }
      }
      if (weatherStatus === 'Snow') {
        imageLink = Snow
      }
      if (weatherStatus === 'Storm') {
        imageLink = Storm
      }
      return imageLink
    }
  }

  logic()

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
                <img src={imageLink} alt={imageLink} />
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
