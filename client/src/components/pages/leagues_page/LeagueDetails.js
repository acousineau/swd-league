import React, { useContext } from 'react'
import { createPortal } from 'react-dom'

import './LeaguePortals.scss'
import ActiveLeaguesContext from '../../../leagues/active_leagues'

const leaguePlayers = info => {
  let content = [<label className="l-col-12 players-label">Players</label>]
  let playersRanked = info.league.players.sort((a, b) => (a.points < b.points ? 1 : -1))

  for (let i = 0; i < playersRanked.length; i++) {
    content.push(
      <div key={[i]} className="ranked-player l-row">
        <div className="ranked-name l-col-6">
          {i + 1}{' '}
          {playersRanked[i].discord ? playersRanked[i].discord.username : playersRanked[i].name}
        </div>
        <div className="ranked-points l-col-6">Total Points: {playersRanked[i].points}</div>
      </div>
    )
  }

  return content
}

const LeagueDetails = ({ details, toggle, leagueKey }) => {
  const info = useContext(ActiveLeaguesContext)[leagueKey]

  if (details === true) {
    return createPortal(
      <div className="LeagueDetails">
        <div className="portal-background"></div>
        <div className="portal-container l-grid">
          <div className="button-container">
            <button
              className="close-details"
              onClick={() => {
                toggle(false)
              }}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="info-container">
            <label className="l-col-12">League Name</label>
            <div>{info.league.name}</div>
            <div className="l-col-12 league-host">
              <label>Host</label>
              <div>
                {info.league.host.discord
                  ? info.league.host.discord.username
                  : info.league.host.name}
              </div>
            </div>
            <div className="l-row">
              <div className="l-col-6 league-points">
                <label>Points Per Win</label>
                <div>{info.league.winPoints}</div>
              </div>
              <div className="l-col-6 league-points">
                <label>Points Per Game</label>
                <div>{info.league.gamePoints}</div>
              </div>
            </div>
            {leaguePlayers(info)}
            <div className="l-row league-dates">
              <div className="l-col-6 start-date">
                Start Date: {String(info.league.start).substr(0, 15)}
              </div>
              <div className="l-col-6 end-date">
                End Date: {String(info.league.end).substr(0, 15)}
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('root-portal')
    )
  } else return null
}

export default LeagueDetails
