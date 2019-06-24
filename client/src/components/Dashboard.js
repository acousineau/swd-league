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
      <div className="l-row">
        <div className="l-col-4">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <DiscordCard discordUser={discordUser} />
        </div>
        <div className="col s8">
          <UserInfo displayName={displayName} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
