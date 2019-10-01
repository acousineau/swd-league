import React from 'react'
import { Link } from 'react-router-dom'

import './DisplayLeagues.scss'

const DisplayLeagues = ({ activeLeagues, toggle, setKey }) => {
  return (
    <div className="l-col-12 LeaguesContainer">
      <div className="l-row">
        <div className="l-col-9 league-name">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${activeLeagues.league.host.discord.avatar})`
            }}
          />
          <Link to={`/leagues/${activeLeagues.key}`} className="league-name l-col-9">
            {activeLeagues.league.name}
          </Link>
        </div>
        <div className="l-col-3 button-container">
          <button
            key={activeLeagues.key}
            className="button info-button"
            onClick={e => {
              toggle(true)
              setKey(activeLeagues.key)
            }}
          >
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
      <div className="l-row">
        <div className="l-col-12 end-date">
          League Ends: {String(activeLeagues.league.end).substr(0, 10)}
        </div>
      </div>
    </div>
  )
}
export default DisplayLeagues
