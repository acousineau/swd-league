import { createContext } from 'react'

const PlayersContext = createContext([
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
  },
  {
    name: 'Heather',
    email: 'heater@swleague.com'
  }
])

export default PlayersContext
