import React from 'react'

import '../../styles/materialize.scss'

const SignIn = props => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="card-title">Please Sign In With Google</div>
            <p className="">Users must log in with Google in order to use the application.</p>
            <div className="card-action">
              <a className="" href="/auth/google">
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
