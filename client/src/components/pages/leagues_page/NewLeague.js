import React, { useState, useReducer } from 'react'
import ActiveLeaguesContext, { LeagueReducer } from '../../../leagues/active_leagues'

import './NewLeague.scss'
import LeagueName from './LeagueName.js'
import LeagueDates from './LeagueDates.js'
import PointsUpdate from './LeaguePoints.js'
import LeaguePlayers from './LeaguePlayers.js'
import InvitePlayers from './InvitePlayers'

const NewLeague = () => {
  const [email, toggleEmail] = useState(false)
  const [name, setName] = useState('')
  const [startDate, setStart] = useState()
  const [endDate, setEnd] = useState()
  const [winPoints, updateWin] = useState(1)
  const [gamePoints, updateGame] = useState(1)
  const [playersSelected, updatePlayers] = useState(null)

  return (
    <div className="NewLeague">
      <div className="l-grid">
        <ActiveLeaguesContext.Provider value={useReducer(LeagueReducer, ActiveLeaguesContext)}>
          <InvitePlayers
            email={email}
            toggle={toggleEmail}
            name={name}
            start={startDate}
            end={endDate}
            win={winPoints}
            game={gamePoints}
            playersSelected={playersSelected}
          />
        </ActiveLeaguesContext.Provider>
        <form className="l-row form-container">
          <h2 className="l-col-12 page-header">BUILD YOUR LEAGUE...</h2>
          <div className="l-col-12 form">
            <div className="l-col-12 name form-section">
              <LeagueName name={name} setName={setName} />
            </div>
            <div className="l-col-12 dates form-section">
              <LeagueDates
                set={setStart}
                type="Start"
                min={undefined}
                max={endDate}
                selected={startDate}
              />
              <LeagueDates
                set={setEnd}
                type="End"
                min={startDate}
                max={undefined}
                selected={endDate}
              />
            </div>
            <div className="l-col-12 points form-section">
              <PointsUpdate points={winPoints} update={updateWin} type="Win" />
              <PointsUpdate points={gamePoints} update={updateGame} type="Game" />
            </div>
            <div className="l-col-12 players form-section">
              <LeaguePlayers updatePlayers={updatePlayers} />
            </div>
            <div className="l-col-12 submit form-section">
              <button
                className="submitForm"
                disabled={!name || !startDate || !endDate || !playersSelected}
                onClick={e => e.preventDefault(toggleEmail(true))}
              >
                Create League
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewLeague
