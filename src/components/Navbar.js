import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'


const Navbar = () => {

  const history = useHistory()

  const location = useLocation()

  console.log(location)

  const handleLogout = () => {
    window.localStorage.removeItem('userNameData')
    history.push('/')
  }

  return (

    <nav className="navbar">

      <div className="container">

        <div className="navbar-brand is-align-items-center">
          <Link to="/">⛅️</Link>
        </div>


        <div className="navbar-start">

          <div className="navbar-item">
            <Link to="/search">Search</Link>
          </div>

          {window.localStorage.getItem('userNameData') &&

            <div className="navbar-item">
              <Link to="/favourites">Favourites</Link>
            </div>

          }

        </div>


        <div className="navbar-end">

          <>

            <div className="navbar-item">

              {window.localStorage.getItem('userNameData') ?

                <div
                  className="button logoutButton"
                  onClick={handleLogout}
                >Log out
                </div>

                :
                
                <Link to="/register">Register / Login</Link>
              }

            </div>

          </>

        </div>

      </div>

    </nav>

  )
}

export default Navbar