import React, { useState } from 'react'



const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
  }

  console.log(searchTerm)

  return (

    <section className="section">

      <div className="container">

        <div className="columns">

          <form
            // onSubmit={handleSubmit}
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