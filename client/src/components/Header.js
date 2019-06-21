import React, { Fragment, useContext } from 'react'
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
  return (
    <nav className="Header">
      <div className="l-grid nav-bar">
        <div className="nav-wrappe l-row">
          <div className="nav-logo l-col-8">
            <i className="fas fa-jedi" />
            <Link to="/" style={{ fontSize: '25px' }}>
              SWD League
            </Link>
            <i className="fab fa-galactic-republic" />
          </div>
          <div className="l-col-4">
            <ul className="right hide-on-small-and-down">
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
