import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import './LeaguePortals.scss'

const playerInvites = players => {
  let content = [
    <label className="l-col-12 players-invite">
      Would you like to invite to following players?
    </label>
  ]

  for (let i = 0; i < players.length; i++) {
    content.push(
      <div key={[i]} className="player-email l-col-12">
        {players[i].email ? players[i].email : players[i].label}
      </div>
    )
  }

  return content
}

const InvitePlayers = ({ email, toggle, name, start, end, win, game, playersSelected }) => {
  const [newLeague, updateDetails] = useState({
    league: {
      name: name,
      start: start,
      end: end,
      winPoints: win,
      gamePoints: game,
      players: playersSelected
    }
  })

  if (email === true) {
    return createPortal(
      <div className="LeagueDetails">
        <div className="portal-background"></div>
        <div className="portal-container invite-portal l-grid">
          <div className="info-container">
            {playerInvites(playersSelected)}
            <div className="l-col-12 button-container">
              <Link to="./leagues">
                <div>{playersSelected.name}</div>
                <button
                  className="send-invite"
                  onClick={() => {
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
