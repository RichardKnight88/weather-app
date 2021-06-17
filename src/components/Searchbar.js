import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const history = useHistory()



  const handleChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
  }

  console.log(searchTerm)


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Search submit works')
    history.push(`/${searchTerm}`)
  }

  // console.log(id)


  return (

    <section className="section">

      <div className="container">

        <div className="columns">

          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter">

            <div className="field">

              <label className="label">Search City</label>

              <div className="control">
                <input
                  onChange={handleChange}
                  value={searchTerm}
                  className="input"
                  placeholder="Enter a city"
                  name="search"
                />

              </div>

            </div>

          </form>

        </div>

      </div>

    </section>

  )

}

export default Searchbar