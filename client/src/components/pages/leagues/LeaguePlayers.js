import React from 'react'
import Select from 'react-select'

const users = [
  {
    name: 'Andy',
    email: 'andy@swleague.com',
    discord: {
      username: 'InvisibleLuis',
      avatar:
        'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
    }
  },
  {
    name: 'Mike',
    email: 'mike@swleague.com',
    discord: {
      username: 'webbasser',
      avatar:
        'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
    }
  },
  {
    name: 'Kevin',
    email: 'kevin@swleague.com',
    discord: {
      username: 'Exar',
      avatar:
        'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
    }
  },
  {
    name: 'David',
    email: 'david@swleague.com',
    discord: {
      username: 'dredged',
      avatar:
        'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
    }
  }
]

const buildPlayerList = users => {
  const playerSearch = []

  for (const [key, value] of Object.entries(users)) {
    playerSearch.push({
      key: key,
      value: [value.name, value.email, value.discord.username],
      label: value.discord.username
    })
  }
  return playerSearch
}

const LeaguePlayers = (playersSelected, updatePlayers) => {
  const players = buildPlayerList(users)

  return (
    <label>
      League Players
      <Select
        isMulti
        name="players"
        options={players}
        classNamePrefix="select"
        onChange={updatePlayers}
      />
    </label>
  )
}
export default LeaguePlayers
