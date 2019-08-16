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
        <Link to="/signin">Sign In</Link>
      </li>
    )
  } else {
    return (
      <Fragment>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="/api/users/signout">Sign Out</a>
        </li>
      </Fragment>
    )
  }
}

const Header = () => {
  const userState = useContext(UserContext)[0]
  const [open, toggleOpen] = useState(false)

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
          <div className="desktop-menu-wrap">
            <div className="desktop-menu">
              <ul className="nav-items">
                <li>
                  <Link to="/leagues">Leagues</Link>
                </li>
                {renderControls(userState.user)}
              </ul>
            </div>
          </div>
        </div>
        <button
          className={`hamburger ${open ? 'cross-sabers' : ''}`}
          onClick={() => {
            toggleOpen(!open)
          }}
        >
          <div className={`saber-container ${open ? 'close-menu' : ''}`}>
            <div className={`saber-a ${open ? 'cross-guard' : ''}`} />
            <div className={`saber-b ${open ? 'rey' : ''}`}>
              <div className="rey-hilt-piece" />
            </div>
            <div className={`saber-c ${open ? 'kylo' : ''}`} />
          </div>
        </button>
        <div className={`mobile-menu-wrap ${open ? 'show-mobile' : ''}`}>
          <div className="mobile-menu">
            <ul className="nav-items">
              <li>
                <Link to="/leagues" className="Leagues-link">
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
