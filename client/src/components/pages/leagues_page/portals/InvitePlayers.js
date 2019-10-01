import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import './Portals.scss'
import ActiveLeaguesContext from '../../../../leagues/active_leagues'

const playerInvites = players => {
  let content = [
    <label className="l-col-12 players-invite">
      Would you like to invite to following players?
    </label>
  ]

  for (let i = 0; i < players.length; i++) {
    content.push(
      <div key={[i]} className="l-col-12 player-email">
        {players[i].email ? players[i].email : players[i].label}
      </div>
    )
  }

  return content
}

const InvitePlayers = ({ email, toggle, name, start, end, win, game, playersSelected }) => {
  const leagues = useContext(ActiveLeaguesContext)
  const newLeague = {
    league: {
      name: name,
      start: start,
      end: end,
      winPoints: win,
      gamePoints: game,
      players: playersSelected
    }
  }

  if (email === true) {
    return createPortal(
      <div className="LeagueDetails">
        <div className="portal-background"></div>
        <div className="l-grid portal-container invite-portal">
          <div className="info-container">
            {playerInvites(playersSelected)}
            <div className="l-col-12 button-container">
              <Link to="./leagues">
                <div>{playersSelected.name}</div>
                <button
                  className="send-invite"
                  onClick={() => {
                    leagues.push(newLeague)
                    console.log(newLeague.league.name)
                    toggle(false)
                  }}
                >
                  Send Invite
                </button>
              </Link>
              <button
                className="cancel-invite"
                onClick={() => {
                  toggle(false)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('root-portal')
    )
  } else return null
}

export default InvitePlayers
