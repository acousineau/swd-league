import React, { useContext } from 'react'
import { createPortal } from 'react-dom'

import './Portals.scss'
import ActiveLeaguesContext from '../../../../leagues/active_leagues'

const topPlayers = info => {
  let content = [<label className="l-col-12 players-label">League Top 3</label>]
  let playersRanked = info.league.players.sort((a, b) => (a.points < b.points ? 1 : -1))
  let rank = ['1st', '2nd', '3rd']

  for (let i = 0; i < 3 && i < playersRanked.length; i++) {
    content.push(
      <div className="l-row ranked-player">
        <div className="l-col-6 ranked-name">
          <div className="l-row">
            <div className="l-col-3 player-ranking">{rank[i] + ' -'}</div>
            <div className="l-col-9">
              {playersRanked[i].discord ? playersRanked[i].discord.username : playersRanked[i].name}
            </div>
          </div>
        </div>
        <div className="l-col-6 ranked-points">Total Points: {playersRanked[i].points}</div>
      </div>
    )
  }

  return content
}

const DetailsPortal = ({ details, toggle, leagueKey }) => {
  const info = useContext(ActiveLeaguesContext)[leagueKey]

  if (details === true) {
    return createPortal(
      <div className="LeagueDetails">
        <div className="portal-background"></div>
        <div className="l-grid portal-container">
          <div className="button-container">
            <button
              className="close-details"
              onClick={() => {
                toggle(false)
              }}
            >
              <i className="fas fa-times"></i>
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
            {topPlayers(info)}
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

export default DetailsPortal
