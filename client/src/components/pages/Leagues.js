import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../user/context'

import './Leagues.scss'

const newLeague = user => {
  if (user === null || user === false) {
    return
  } else {
    return (
      <div className="l-col-3 new-button-container">
        <Link to="/newleague" className="button  new-league-button">
          CREATE NEW
        </Link>
      </div>
    )
  }
}

const Leagues = () => {
  const userState = useContext(UserContext)[0]
  return (
    <div className="Leagues">
      <div className="l-grid">
        <div className="l-row">
          <h4 className="l-col-9 page-header">Leagues</h4>
          {newLeague(userState.user)}
        </div>
        <div className="l-row">
          <div>League will go here</div>
          <div>League will go here</div>
          <div>League will go here</div>
        </div>
      </div>
    </div>
  )
}

export default Leagues
