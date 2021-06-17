import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const Register = () => {

  const [userNameData, setUserNameData] = useState('')

  const [loginError, setLoginError] = useState('')

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
  }

  const setUserNameToLocalStorage = () => {
    if (window.localStorage.getItem('userNameData')) {

      const userNameFromLocalStorage = (window.localStorage.getItem('userNameData'))

      if (window.localStorage.getItem('userNameData') === userNameData) {
        // window.alert('LOGS IN')
        history.push('/search')

      } else {
        setLoginError(`It looks like this is the wrong username, try ${userNameFromLocalStorage}`)
      }
    } else {
      // window.alert('REGISTERED')
      window.localStorage.setItem('userNameData', userNameData)
      history.push('/search')

    }
  }

  useEffect(() => {
    
    
  }, [])


  console.log('LOGIN ERROR', loginError)


  // const remove = () => {
  //   window.localStorage.removeItem('userNameData')
  // }

  // remove()

  return (
    <section className="section hero is-fullheight-with-navbar searchPage">

      <div className="container">

        <div className="columns searchBackground register">
          <form
            onSubmit={handleSubmit}
            className="column is-three-quarters form">

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

              {loginError && <p className="help is-danger subtitle is-6">{loginError}</p>}

            </div>
            <div className="field">
              <button type="submit" className="button  is-fullwidth">
                Register / Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register