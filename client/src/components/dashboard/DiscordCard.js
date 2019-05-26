import React from 'react'

import './DiscordCard.scss'

const DiscordCard = props => {
  const { discordUser } = props
  return (
    <div className="DiscordCard card">
      <div className="card-image">
        <h4 className="card-title">Discord Connection</h4>
        {discordUser && (
          <div
            className="avatar"
            style={{
              backgroundImage: `url(https://cdn.discordapp.com/avatars/${discordUser.id}/${
                discordUser.avatar
              }.png)`
            }}
          />
        )}
      </div>
      <div className="row card-content">
        <div className="discord-section col s12">
          <a href="/auth/discord" className="btn waves-effect waves-light discord">
            <i className="fab fa-discord" style={{ fontSize: '20px' }} />
            <span style={{ position: 'relative', top: '-2px' }}>
              &nbsp;&nbsp;{discordUser ? 'ReSync' : 'Connect'} Discord
            </span>
          </a>
          {discordUser && (
            <i className="material-icons green-text" style={{ fontSize: '3rem' }}>
              check
            </i>
          )}
        </div>
      </div>
    </div>
  )
}

export default DiscordCard
