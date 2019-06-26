import React, { useContext } from 'react'
import UserContext from '../user/context'

import DiscordCard from './dashboard/DiscordCard'
import UserInfo from './dashboard/UserInfo'

import './Dashboard.scss'

const Dashboard = props => {
  const userState = useContext(UserContext)[0]
  const discordUser = userState.user && userState.user.discord
  const displayName = userState.user && userState.user.discord && userState.user.discord.username

  return (
    <div className="Dashboard">
      <div className="l-grid">
        <div className="l-row">
          <h4>Dashboard</h4>
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
      </div>
    </div>
  )
}

export default Dashboard
