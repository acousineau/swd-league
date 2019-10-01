import React from 'react'

import './EmailError.scss'

const LeagueCreated = ({ open }) => {
  return (
    <div className={`l-col-12 EmailError ${!open ? 'hide-error' : ''}`}>
      Please enter a vaild email address...
    </div>
  )
}

export default LeagueCreated
