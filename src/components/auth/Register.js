import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const Register = () => {
  const [userNameData, setUserNameData] = useState('')
  const history = useHistory()


  const handleChange = (event) => {
    const newUserNameData = event.target.value
    // console.log(event.target.name)
    setUserNameData(newUserNameData)
  }

  console.log('USERNAME DATA', userNameData)

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserNameToLocalStorage()
    console.log('Submit works')
    history.push('/')
  }

  const setUserNameToLocalStorage = () => {
    if (window.localStorage.getItem('userNameData')) {

      const userNameFromLocalStorage = (window.localStorage.getItem('userNameData'))

      if (window.localStorage.getItem('userNameData') === userNameData) {
        window.alert('LOGS IN')
      } else {
        window.alert(`It looks like this is the wrong username, try ${userNameFromLocalStorage}`)
      }
    } else {
      window.alert('REGISTERED')
      window.localStorage.setItem('userNameData', userNameData)
    }
  }

  useEffect(() => {
    
    
  }, [])




  // const remove = () => {
  //   window.localStorage.removeItem('userNameData')
  // }

  // remove()

  return (
    <section className="section">

      <div className="container">

        <div className="columns">
          <form
            onSubmit={handleSubmit}
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