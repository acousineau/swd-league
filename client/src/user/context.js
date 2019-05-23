import { createContext } from 'react'

const UserContext = createContext()

export const UserContextState = {
  user: null
}

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user || false }

    default:
      return state
  }
}

export default UserContext
