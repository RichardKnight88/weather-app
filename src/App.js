import React from 'react'
import axios from 'axios'

function App() {

  // Spent time tracing a bug here. needed to add https:// - starting at api was working in insomnia
  const getData = async () => {
    try {
      const { data } = await axios.get('http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=dff3c764b6f0c9b9852bb2fb8f5bf85a')
      console.log(data.list[0])
    } catch (err) {
      console.log(err)
    }
  }

  getData()

  return (

    <h1>Hello World</h1>


  )
}

export default App
