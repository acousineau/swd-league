import { createContext } from 'react'

const ActiveLeaguesContext = createContext([
  {
    key: 0,
    league: {
      host: {
        name: 'Andy',
        email: 'andy@swleague.com',
        discord: {
          username: 'InvisibleLuis',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #1 that is super long and is going to run over when the screen it too small',
      start: 'Tue Sep 03 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sun Sep 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      winPoints: 1,
      gamePoints: 1,
      players: [
        {
          joined: true,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 2
        },
        {
          joined: true,
          name: 'Kevin',
          email: 'kevin@swleague.com',
          discord: {
            username: 'Exar',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 12
        },
        {
          joined: true,
          name: 'Mike',
          email: 'mkazmer055@gmail.com',
          discord: {
            username: 'webbasser',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 0
        }
      ]
    }
  },
  {
    key: 1,
    league: {
      host: {
        name: 'Mike',
        email: 'mkazmer055@gmail.com',
        discord: {
          username: 'webbasser',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #2',
      start: 'Tue Oct 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sat Nov 30 2019 00:00:00 GMT-0500 (Eastern Daylight Time)',
      winPoints: 2,
      gamePoints: 0,
      players: [
        {
          joined: true,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 22
        },
        {
          joined: false,
          name: 'Mike',
          email: 'mkazmer055@gmail.com',
          discord: {
            username: 'webbasser',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 0
        },
        {
          joined: true,
          name: 'David',
          email: 'david@swleague.com',
          discord: {
            username: 'dredged',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 16
        },
        {
          joined: false,
          name: 'Heather',
          email: 'heater@swleague.com',
          points: 20
        }
      ]
    }
  },
  {
    key: 2,
    league: {
      host: {
        name: 'Andy',
        email: 'andy@swleague.com',
        discord: {
          username: 'InvisibleLuis',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #3',
      start: 'Tue Sep 03 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sun Sep 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      winPoints: 1,
      gamePoints: 1,
      players: [
        {
          joined: false,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 2
        },
        {
          joined: false,
          name: 'Kevin',
          email: 'kevin@swleague.com',
          discord: {
            username: 'Exar',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 12
        }
      ]
    }
  },
  {
    key: 3,
    league: {
      host: {
        name: 'Andy',
        email: 'andy@swleague.com',
        discord: {
          username: 'InvisibleLuis',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #4 blahBlah',
      start: 'Tue Sep 03 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sun Sep 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      winPoints: 1,
      gamePoints: 1,
      players: [
        {
          joined: true,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 2
        },
        {
          joined: true,
          name: 'Kevin',
          email: 'kevin@swleague.com',
          discord: {
            username: 'Exar',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 12
        },
        {
          joined: false,
          name: 'Mike',
          email: 'mkazmer055@gmail.com',
          discord: {
            username: 'webbasser',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 0
        }
      ]
    }
  },
  {
    key: 4,
    league: {
      host: {
        name: 'Mike',
        email: 'mkazmer055@gmail.com',
        discord: {
          username: 'webbasser',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #5',
      start: 'Tue Oct 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sat Nov 30 2019 00:00:00 GMT-0500 (Eastern Daylight Time)',
      winPoints: 2,
      gamePoints: 0,
      players: [
        {
          joined: true,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 22
        },
        {
          joined: true,
          name: 'David',
          email: 'david@swleague.com',
          discord: {
            username: 'dredged',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 16
        },
        {
          joined: false,
          name: 'Heather',
          email: 'heater@swleague.com',
          points: 20
        }
      ]
    }
  },
  {
    key: 5,
    league: {
      host: {
        name: 'Andy',
        email: 'andy@swleague.com',
        discord: {
          username: 'InvisibleLuis',
          avatar:
            'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
        }
      },
      name: 'League #6',
      start: 'Tue Sep 03 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      end: 'Sun Sep 01 2019 00:00:00 GMT-0400 (Eastern Daylight Time)',
      winPoints: 1,
      gamePoints: 1,
      players: [
        {
          joined: false,
          name: 'Andy',
          email: 'andy@swleague.com',
          discord: {
            username: 'InvisibleLuis',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 2
        },
        {
          joined: false,
          name: 'Kevin',
          email: 'kevin@swleague.com',
          discord: {
            username: 'Exar',
            avatar:
              'https://cdn.discordapp.com/avatars/554734389939011606/c09607418470c15c4d1afa52051a3163.png'
          },
          points: 12
        }
      ]
    }
  }
])

export const LeagueReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LEAGUE':
      return {
        ActiveLeaguesContext: [
          ...state.ActiveLeaguesContext,
          { key: ActiveLeaguesContext.length, league: action.newLeague }
        ]
      }

    default:
      return state
  }
}

export default ActiveLeaguesContext
