import React, { useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import AppContainer from './AppContainer'

import UserContext, { UserContextState, UserReducer } from '../user/context'

const App = props => {
  return (
    <UserContext.Provider value={useReducer(UserReducer, UserContextState)}>
      <Router>
        <Header />
        <div className="container">
          <AppContainer />
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App
