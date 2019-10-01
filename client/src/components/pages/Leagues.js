import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../user/context'

import './Leagues.scss'
import DisplayLeagues from './leagues_page/DisplayLeagues'
import DetailsPortal from './leagues_page/portals/DetailsPortal'
import LeagueCreated from './leagues_page/LeagueCreated'
import ActiveLeaguesContext from '../../leagues/active_leagues'

const activeLeagues = (activeLeagues, toggleDetails, setKey) => {
  const leagueList = []
  for (let i = 0; i < activeLeagues.length; i++) {
    leagueList.push(
      <DisplayLeagues
        activeLeagues={activeLeagues[i]}
        toggle={toggleDetails}
        key={i}
        setKey={setKey}
      />
    )
  }
  return leagueList
}

const newLeague = user => {
  if (user === null || user === false) {
    return
  } else {
    return (
      <div className="l-col-3 button-container">
        <Link
          className="button new-league-button"
          to={{
            pathname: '/newleague'
          }}
        >
          CREATE NEW
        </Link>
      </div>
    )
  }
}

const Leagues = () => {
  const userState = useContext(UserContext)[0]
  const [details, toggleDetails] = useState(false)
  const [detailsKey, setKey] = useState(NaN)

  return (
    <div className="Leagues">
      <DetailsPortal details={details} toggle={toggleDetails} leagueKey={detailsKey} />
      <LeagueCreated />
      <div className="l-grid">
        <div className="l-row">
          <h4 className="l-col-9 page-header">Leagues</h4>
          {newLeague(userState.user)}
        </div>
        <div className="l-row leagues-container">
          {activeLeagues(useContext(ActiveLeaguesContext), toggleDetails, setKey)}
        </div>
      </div>
    </div>
  )
}

export default Leagues
