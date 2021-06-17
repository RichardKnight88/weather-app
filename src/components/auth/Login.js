import React from 'react'


const Login = () => {


  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="box column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  
                  placeholder="Email"
                  
                  name="email"
                  
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  
                  placeholder="Password"
                  
                  name="password"
                  
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth">Log Me In!</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}
export default Login