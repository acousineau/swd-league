import React, { useState } from 'react'

import './NewLeague.scss'
import LeagueName from './LeagueName.js'
import LeagueDates from './LeagueDates.js'

function PointsUpdate(winPoints, updateWin, gamePoints, updateGame) {
  const incrementPoints = points => {
    if (points < 10) {
      points += 1
    }
    return points
  }

  const decrementPoints = points => {
    if (points > 0) {
      points -= 1
    }
    return points
  }

  return (
    <form className="row pointCounters">
      <div className="l-col-6">
        <label className=" pointsBox">
          Points Per Win
          <div className="points">
            <button
              className="pointDec"
              onClick={e => e.preventDefault(updateWin(decrementPoints(winPoints)))}
            >
              -
            </button>
            <div className="pointDisplay">{winPoints}</div>
            <button
              className="pointInc"
              onClick={e => e.preventDefault(updateWin(incrementPoints(winPoints)))}
            >
              +
            </button>
          </div>
        </label>
      </div>
      <div className="l-col-6">
        <label className=" pointsBox">
          Points Per Game
          <div className="points">
            <button
              className="pointDec"
              onClick={e => e.preventDefault(updateGame(decrementPoints(gamePoints)))}
            >
              -
            </button>
            <div className="pointDisplay">{gamePoints}</div>
            <button
              className="pointInc"
              onClick={e => e.preventDefault(updateGame(incrementPoints(gamePoints)))}
            >
              +
            </button>
          </div>
        </label>
      </div>
    </form>
  )
}

const NewLeague = () => {
  const [name, setName] = useState('')
  const [nameSaved, saveName] = useState(false)
  const [startDate, setStart] = useState()
  const [endDate, setEnd] = useState()
  const [winPoints, updateWin] = useState(1)
  const [gamePoints, updateGame] = useState(1)

  return (
    <div className="NewLeague">
      <div className="l-grid">
        <div className="l-row">
          <h4 className="l-col-12 page-header">Leagues</h4>
          <div className="intro">BUILD YOUR LEAGUE...</div>
          <div className="l-col-12 form-container">
            <label>
              League Name
              <LeagueName name={name} setName={setName} nameSaved={nameSaved} saveName={saveName} />
            </label>
            {LeagueDates(startDate, setStart, endDate, setEnd)}
            {PointsUpdate(winPoints, updateWin, gamePoints, updateGame)}
            <div>
              <label>
                Add Players
                <input type="text" className="input" placeholder="Search..." />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLeague
