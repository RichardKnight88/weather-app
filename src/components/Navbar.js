import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (

    <nav className="navbar">

      <div className="container">

        <div className="navbar-brand is-align-items-center">
          <Link to="/">⟰</Link>
        </div>

        <div className="navbar-start">

          <div className="navbar-item">
            <Link to="/search">Search</Link>
          </div>

        </div>

        <div className="navbar-end">

          <>
            <div className="navbar-item">
              <Link to="/register">Register / Login</Link>
            </div>
          </>

        </div>

      </div>

    </nav>

  )
}

export default Navbar