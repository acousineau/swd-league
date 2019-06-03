import React from 'react'

import './SignIn.scss'

const SignIn = props => {
  return (
    <div className="SignIn">
      <div className="signin-card">
        <div className="signin-card-title">Please Sign In With Google</div>
        <div className="signin-card-action">
          <p className="signin-text">
            Users must log in with Google in order to use the application.
          </p>
          <a className="" href="/auth/google">
            <i className="fab fa-google" />
            &nbsp;&nbsp;Sign In with Google
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
