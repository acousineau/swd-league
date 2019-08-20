import React, { useState } from 'react'

import './NewLeague.scss'
import LeagueName from './LeagueName.js'
import LeagueDates from './LeagueDates.js'
import PointsUpdate from './LeaguePoints.js'
import SearchPlayers from './LeaguePlayers.js'

const NewLeague = () => {
  const [name, setName] = useState('')
  const [nameSaved, saveName] = useState(false)
  const [startDate, setStart] = useState()
  const [endDate, setEnd] = useState()
  const [winPoints, updateWin] = useState(1)
  const [gamePoints, updateGame] = useState(1)
  const [search, updateSearch] = useState()
  const [searching, isSearching] = useState(false)

  const createLeague = () => {
    console.log(
      'League Name: ' +
        name +
        '\nStart Date: ' +
        startDate +
        '\nEnd Date: ' +
        endDate +
        '\nWin Points: ' +
        winPoints +
        '\nGame Points: ' +
        gamePoints
    )
  }

  return (
    <div className="NewLeague">
      <div className="l-grid">
        <div className="l-row">
          <h4 className="l-col-12 page-header">Leagues</h4>
          <div className="l-col-12 form-container">
            <div className="l-row intro">BUILD YOUR LEAGUE...</div>
            <label>
              League Name
              <LeagueName name={name} setName={setName} nameSaved={nameSaved} saveName={saveName} />
            </label>
            <LeagueDates
              startDate={startDate}
              setStart={setStart}
              endDate={endDate}
              setEnd={setEnd}
            />
            <PointsUpdate
              winPoints={winPoints}
              updateWin={updateWin}
              gamePoints={gamePoints}
              updateGame={updateGame}
            />
            <SearchPlayers
              search={search}
              updateSearch={updateSearch}
              searching={searching}
              isSearching={isSearching}
            />
            <div className="l-col-12 submit">
              <button
                className="submitForm"
                disabled={!nameSaved || !startDate || !endDate}
                onClick={createLeague}
              >
                Create League
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLeague
