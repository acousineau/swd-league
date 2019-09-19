import React from 'react'

import './DisplayLeagues.scss'

const DisplayLeagues = ({ activeLeague, toggle, setKey }) => {
  return (
    <div className="l-col-12 LeaguesContainer">
      <div className="l-row">
        <div className="l-col-9 league-name">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${activeLeague.host.discord.avatar})`
            }}
          />
          {activeLeague.name}
        </div>
        <div className="l-col-3 button-container">
          <button
            key={activeLeague.key}
            className="button view-button"
            onClick={e => {
              toggle(true)
              setKey(activeLeague.key)
            }}
          >
            Details
          </button>
        </div>
      </div>
      <div className="l-row">
        <div className="l-col-12 end-date">
          League Ends: {String(activeLeague.end).substr(0, 10)}
        </div>
      </div>
    </div>
  )
}
export default DisplayLeagues
