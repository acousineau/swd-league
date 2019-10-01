import React from 'react'
import { Link } from 'react-router-dom'

import './DisplayParticipated.scss'

const hostLeague = hosted => {
  if (hosted === true) {
    return <div className="hosting">HOSTING</div>
  } else {
    return
  }
}

const joinedLeague = invited => {
  if (invited === true) {
    return <div className="joined">Joined</div>
  } else {
    return
  }
}

const DisplayParticipated = ({ activeLeagues, hosted, invited, player }) => {
  if (activeLeagues.league.players[player].joined === false && invited === true) {
    return (
      <div className="l-col-12 LeagueInvite">
        <div className="l-row">
          <div className="l-col-12">You have been invited to join:</div>
          <Link
            to={`/leagues/${activeLeagues.key}`}
            key={activeLeagues.league.key}
            className="l-col-6 league-name"
          >
            {activeLeagues.league.name}
          </Link>
          <div className="l-col-6 invite-button-container">
            <button className="decline-button">Decline</button>
            <button className="accept-button">Accept Invite</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="l-col-12 DisplayParticipated">
        <div className="l-row">
          <Link
            to={`/leagues/${activeLeagues.key}`}
            key={activeLeagues.league.key}
            className="l-col-9 league-name"
          >
            {activeLeagues.league.name}
          </Link>
          <div className="l-col-3">{hostLeague(hosted)}</div>
        </div>
        <div className="l-row">
          <div className="l-col-9 end-date">
            League Ends: {String(activeLeagues.league.end).substr(0, 10)}
          </div>
          <div className="l-col-3">{joinedLeague(invited)}</div>
        </div>
      </div>
    )
  }
}
export default DisplayParticipated
