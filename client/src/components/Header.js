import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../user/context'

import './Header.scss'

const renderControls = user => {
  if (user === null) {
    return
  } else if (user === false) {
    return (
      <li>
        <Link to="/signin" className="">
          Sign In With Google
        </Link>
      </li>
    )
  } else {
    return (
      <Fragment>
        <li>
          <Link to="/dashboard" className=" mr-2">
            Dashboard
          </Link>
        </li>
        <li>
          <a href="/api/users/signout" className=" mr-2">
            Sign Out
          </a>
        </li>
      </Fragment>
    )
  }
}

const Header = () => {
  const userState = useContext(UserContext)[0]
  const [menuOpen, toggleMenuOpen] = useState(false)
  return (
    <nav className="Header">
      <div className="row">
        <div className="col s12">
          <div className="nav-wrapper">
            <div className="nav-logo">
              <i className="fas fa-jedi" />
              <Link to="/" className="">
                Star Wars Destiny League
              </Link>
              <i className="fab fa-galactic-republic" />
            </div>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/leagues" className="">
                  Leagues
                </Link>
              </li>
              {renderControls(userState.user)}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
