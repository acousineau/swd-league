import React from 'react'
import './SignIn.scss'

const SignIn = props => {
  return (
    <div className="SignIn">
      <div className="l-grid">
        <div className="l-col-12 sign-in-card">
          <div className="sign-in-card-title">Please Sign In With Google</div>
          <div className="l-row sign-in-body">
            <p className="l-col-12 sign-in-card-text">
              Users must log in with Google in order to use the application.
            </p>
            <div className="l-row cta-wrap">
              <a className="sign-in-card-cta" href="/auth/google">
                <i className="fab fa-google" />
                &nbsp;&nbsp;Sign In with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
