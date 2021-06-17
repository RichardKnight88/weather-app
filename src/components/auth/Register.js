import React, { useState } from 'react'


const Register = () => {
  const [userNameData, setUserNameData] = useState({ name: '' })

  const handleChange = (event) => {
    const newUserNameData = { ...userNameData, name: event.target.value }
    // console.log(event.target.name)
    setUserNameData(newUserNameData)
  }
  console.log(userNameData)


  return (
    <section className="section">

      <div className="container">

        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box">

            <div className="field">
              <label className="label" >Name</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input is-fullwidth"
                  placeholder="Username"
                  name="username"
                  value={userNameData.username}
                />
              </div>

            </div>
            <div className="field">
              <button type="submit" className="button  is-fullwidth">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register