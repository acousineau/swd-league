import React, { useState, useContext } from 'react'
import CreatableSelect from 'react-select/creatable'

import PlayersContext from '../../../leagues/players'

const buildPlayerList = users =>
  users.map(user => ({
    label: user.discord ? user.discord.username : user.name,
    value: user.discord ? [user.name, user.email, user.discord.username] : [user.name, user.email]
  }))

const LeaguePlayers = ({ updatePlayers }) => {
  const [players] = useState(buildPlayerList(useContext(PlayersContext)))

  return (
    <label>
      League Players
      <CreatableSelect
        isMulti
        options={players}
        styles={{ backgroundColor: 'black' }}
        onChange={e => {
          updatePlayers(e)
        }}
      />
    </label>
  )
}
export default LeaguePlayers
