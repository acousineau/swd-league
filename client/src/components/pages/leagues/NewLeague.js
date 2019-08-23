import React, { useState } from 'react'

import './NewLeague.scss'
import LeagueName from './LeagueName.js'
import LeagueDates from './LeagueDates.js'
import PointsUpdate from './LeaguePoints.js'
import LeaguePlayers from './LeaguePlayers.js'

const NewLeague = () => {
  const [name, setName] = useState('')
  const [startDate, setStart] = useState()
  const [endDate, setEnd] = useState()
  const [winPoints, updateWin] = useState(1)
  const [gamePoints, updateGame] = useState(1)
  const [playerSearch, updateSearch] = useState([])

  const createLeague = () => {
    console.log(name)
  }

  return (
    <div className="NewLeague">
      <div className="l-grid">
        <form className="l-row">
          <h2 className="l-col-12 page-header">BUILD YOUR LEAGUE...</h2>
          <div className="l-col-12 form-container">
            <LeagueName name={name} setName={setName} />
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
            <PointsUpdate points={winPoints} update={updateWin} type="Win" />
            <PointsUpdate points={gamePoints} update={updateGame} type="Game" />
            <LeaguePlayers />
            <div className="l-col-12 submit">
              <button
                className="submitForm"
                disabled={!name || !startDate || !endDate}
                onClick={createLeague}
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
