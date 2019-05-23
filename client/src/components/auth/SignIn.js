import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const authenticateWithGoogle = () => {
//   axios.get()
// }

const SignIn = props => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto border border-gray-400">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Please Sign In With Google</div>
        <p className="text-gray-700 text-base mb-5">
          Users must log in with Google in order to use the application.
        </p>
        <div className="text-center">
          <a
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto inline-block"
            href="/auth/google"
          >
            <i className="fab fa-google" />
            &nbsp;&nbsp;Sign In with Google
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
