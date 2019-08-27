import { createContext } from 'react'

const PlayersContext = createContext()

export const PlayersContextState = {
  user: null
}

export const PlayerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user || false }

    default:
      return state
  }
}

export default PlayersContext
