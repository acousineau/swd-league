import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../user/context'

import './Header.scss'

const renderControls = user => {
  if (user === null) {
    return
  } else if (user === false) {
    return (
      <li id="sign-in">
        <Link to="/signin">Sign In</Link>
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
      <div className="header-wrapper">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <i className="fas fa-jedi" />
            <Link to="/" className="home-link" style={{ fontSize: '25px' }}>
              SWD League
            </Link>
            <i className="fab fa-galactic-republic" />
          </div>

          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div className="jedi-saber" />
              <div className="sith-saber" />
            </div>
            <div className="main-menu">
              <ul className="nav-items">
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
      </div>
    </nav>
  )
}

export default Header
