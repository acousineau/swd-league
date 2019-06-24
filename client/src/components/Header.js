import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../user/context'

import './Header.scss'

const renderControls = user => {
  if (user === null) {
    return
  } else if (user === false) {
    return (
      <li className="sign-in">
        <Link to="/signin">Sign In With Google</Link>
      </li>
    )
  } else {
    return (
      <Fragment>
        <li>
          <a href="/api/users/signout" className=" mr-2">
            Sign Out
          </a>
        </li>
        <li>
          <Link to="/dashboard" className=" mr-2">
            Dashboard
          </Link>
        </li>
      </Fragment>
    )
  }
}

const Header = () => {
  const userState = useContext(UserContext)[0]
  return (
    <nav className="Header">
      <div className="nav-wrapper l-row">
        <div className="nav-logo">
          <i className="fas fa-jedi" />
          <Link to="/" style={{ fontSize: '25px' }}>
            SWD League
          </Link>
          <i className="fab fa-galactic-republic" />
        </div>
        <div className="main-nav">
          <ul className="right hide-on-small-and-down l-col-12">
            {renderControls(userState.user)}
            <li>
              <Link to="/leagues" className="">
                Leagues
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
