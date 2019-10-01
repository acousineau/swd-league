import React, { useState, useContext } from 'react'
import UserContext from '../../user/context'

import DiscordCard from './dashboard/DiscordCard'
import UserInfo from './dashboard/UserInfo'

import './Dashboard.scss'
import ActiveLeaguesContext from '../../leagues/active_leagues'
import DisplayParticipated from './dashboard/DisplayParticipated'

const participatedLeagues = (activeLeagues, userEmail, leaguesDisplayed) => {
  const leagueList = []

  for (let i = 0; i < activeLeagues.length; i++) {
    let hosted = true ? userEmail === activeLeagues[i].league.host.email : false
    let invited = false
    let joined = false
    let player = null

    for (let x = 0; x < activeLeagues[i].league.players.length; x++) {
      player = x
      joined = true ? activeLeagues[i].league.players[x].joined : false
      invited = true ? userEmail === activeLeagues[i].league.players[x].email : false
      if (invited === true) {
        break
      }
    }

    if (
      (hosted && (leaguesDisplayed === 'all' || leaguesDisplayed === 'hosting')) ||
      (invited && (leaguesDisplayed === 'all' || (joined && leaguesDisplayed === 'joined'))) ||
      (invited && !joined && leaguesDisplayed === 'invites')
    ) {
      leagueList.push(
        <DisplayParticipated
          key={i}
          activeLeagues={activeLeagues[i]}
          hosted={hosted}
          invited={invited}
          player={player}
          displayed={leaguesDisplayed}
        />
      )
    }
  }
  return leagueList
}

const Dashboard = props => {
  const userState = useContext(UserContext)[0]
  const discordUser = userState.user && userState.user.discord
  const displayName = userState.user && userState.user.discord && userState.user.discord.username
  const userEmail = userState.user && userState.user.email
  const [leaguesDisplayed, updateDisplayed] = useState('all')

  return (
    <div className="Dashboard">
      <div className="l-grid">
        <div className="l-row">
          <h4 className="l-col-12 page-header">Dashboard</h4>
        </div>
      </div>
      <div className="l-grid">
        <div className="l-row">
          <div className="l-col-3">
            <DiscordCard discordUser={discordUser} />
          </div>
          <div className="l-col-6">
            <UserInfo displayName={displayName} />
          </div>
        </div>
        <div className="l-row leagues-container">
          <div className="l-col-12 leagues-header">
            <div className="l-row">
              <div className="l-col-6">Current Leagues</div>
              <div className="l-col-6">
                <select
                  onChange={e => {
                    updateDisplayed(e.target.value)
                  }}
                  className="league-filter"
                >
                  <option value="all">ALL</option>
                  <option value="hosting">Hosting</option>
                  <option value="joined">Joined</option>
                  <option value="invites">Invites</option>
                </select>
              </div>
            </div>
          </div>
          {participatedLeagues(useContext(ActiveLeaguesContext), userEmail, leaguesDisplayed)}
          <div className="l-col-12 leagues-footer"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
