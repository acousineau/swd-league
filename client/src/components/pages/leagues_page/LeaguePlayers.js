import React, { useState, useContext } from 'react'
import CreatableSelect from 'react-select/creatable'

import EmailErrorMessage from './EmailError'
import PlayersContext from '../../../leagues/players'

const buildPlayerList = users =>
  users.map(user => ({
    label: user.discord ? user.discord.username : user.name,
    value: user.discord ? [user.name, user.email, user.discord.username] : [user.name, user.email]
  }))

const LeaguePlayers = ({ playersSelected, updatePlayers }) => {
  const players = buildPlayerList(useContext(PlayersContext))
  const [emailError, displayError] = useState(false)

  return (
    <label>
      League Players
      <EmailErrorMessage open={emailError} />
      <CreatableSelect
        isMulti
        options={players}
        value={playersSelected}
        onChange={selected => {
          updatePlayers(selected)
        }}
        onCreateOption={created => {
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(created)) {
            playersSelected.push({
              label: created,
              value: created
            })
          } else {
            displayError(true)
            setTimeout(e => {
              displayError(false)
            }, 5000)
          }
        }}
      />
    </label>
  )
}
export default LeaguePlayers
