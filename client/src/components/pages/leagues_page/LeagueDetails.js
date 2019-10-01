import React, { useContext } from 'react'

import ActiveLeaguesContext from '../../../leagues/active_leagues'

const leaguePlayers = info => {
  let content = [<label className="l-col-12 players-label">League Players</label>]
  let playersRanked = info.league.players.sort((a, b) => (a.points < b.points ? 1 : -1))

  for (let i = 0; i < playersRanked.length; i++) {
    content.push(
      <div key={[i]} className="ranked-player l-row">
        <div className="player-name l-col-6">
          <div className="l-row">
            <div className="l-col-9">
              {playersRanked[i].discord ? playersRanked[i].discord.username : playersRanked[i].name}
            </div>
          </div>
        </div>
        <div className="ranked-points l-col-6">Total Points: {playersRanked[i].points}</div>
      </div>
    )
  }

  return content
}

const LeagueDetails = ({ match }) => {
  const info = useContext(ActiveLeaguesContext)[match.params.id]
  console.log(info)
  return (
    <div className="">
      <div className="">
        <label className="l-col-12">League Name</label>
        <div>{info.league.name}</div>
        <div className="l-col-12">
          <label>Host</label>
          <div>
            {info.league.host.discord ? info.league.host.discord.username : info.league.host.name}
          </div>
        </div>
        {leaguePlayers(info)}
        <div className="l-row">
          <div className="l-col-6">Start Date: {String(info.league.start).substr(0, 15)}</div>
          <div className="l-col-6">End Date: {String(info.league.end).substr(0, 15)}</div>
        </div>
      </div>
    </div>
  )
}

export default LeagueDetails
