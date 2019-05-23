import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../user/context'

const renderControls = user => {
  if (user === null) {
    return
  } else if (user === false) {
    return (
      <Link
        to="/signin"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-900 hover:bg-white mt-4 md:mt-0"
      >
        Sign In With Google
      </Link>
    )
  } else {
    return (
      <Fragment>
        <Link
          to="/dashboard"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-900 hover:bg-white mt-4 md:mt-0 mr-2"
        >
          Dashboard
        </Link>
        <a
          href="/api/users/signout"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-900 hover:bg-white mt-4 md:mt-0 mr-2"
        >
          Sign Out
        </a>
      </Fragment>
    )
  }
}

const Header = () => {
  const userState = useContext(UserContext)[0]
  const [menuOpen, toggleMenuOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
      <div className="flex items-center flex-shrink-0 justify-between text-white mr-6">
        <i className="fas fa-jedi text-xl sm:text-4xl mr-2 hidden sm:block" />
        <Link to="/" className="font-semibold sm:text-xl mr-2">
          Star Wars Destiny League
        </Link>
        <i className="fab fa-galactic-republic hidden sm:block text-xl sm:text-4xl" />
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => {
            toggleMenuOpen(!menuOpen)
          }}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-900 hover:border-red-900"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          menuOpen ? '' : 'hidden'
        } block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div className="text-sm md:flex-grow">
          <Link
            to="/leagues"
            className="block mt-4 md:inline-block md:mt-0 text-white hover::text-red-900 mr-4"
          >
            Leagues
          </Link>
        </div>
        <div>{renderControls(userState.user)}</div>
      </div>
    </nav>
  )
}

export default Header
