import React from 'react'

const SignIn = props => {
  return (
    <div className="">
      <div className="">
        <div className="">Please Sign In With Google</div>
        <p className="">Users must log in with Google in order to use the application.</p>
        <div className="">
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
