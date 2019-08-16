import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './NewLeague.scss'

function LeagueName({ name, setName, nameSaved, saveName }) {
  const save = e => {
    e.preventDefault()
    if (!name) return
    saveName(true)
    return
  }

  const editName = e => {
    saveName(false)
  }

  if (nameSaved !== true) {
    return (
      <form onSubmit={save}>
        <input type="text" className="name" value={name} onChange={e => setName(e.target.value)} />
      </form>
    )
  } else {
    return (
      <div className="savedName">
        <h2>{name}</h2>
        <button className="editName" onClick={editName}>
          edit
        </button>
      </div>
    )
  }
}

function LeagueDates(startDate, setStart, endDate, setEnd) {
  return (
    <form>
      <div className="l-row dates-select">
        <div className="l-col-6 start-date">
          <label>
            Start Date
            <DayPickerInput onDayChange={setStart} />
          </label>
        </div>
        <div className="l-col-6 end-date">
          <label>
            End Date
            <DayPickerInput onDayChange={setEnd} />
          </label>
        </div>
      </div>
    </form>
  )
}

function PointsUpdate(winPoints, updateWin, gamePoints, updateGame) {
  return (
    <form>
      <div className="l-row dates-select">
        <div className="l-col-6 start-date">
          <label>
            Points Per Win
            <input
              type="number"
              className="pointInput"
              value={winPoints}
              onChange={e => updateWin(e.target.value)}
            />
          </label>
        </div>
        <div className="l-col-6 end-date">
          <label>
            Points Per Game
            <input
              type="number"
              className="pointInput"
              value={gamePoints}
              onChange={e => updateGame(e.target.value)}
            />
          </label>
        </div>
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
              {LeagueName({ name, setName, nameSaved, saveName })}
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
