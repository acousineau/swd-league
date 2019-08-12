import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'

import Welcome from '../components/Welcome'
import Dashboard from '../components/Dashboard'
import SignIn from '../components/auth/SignIn'
import Leagues from '../components/Leagues'
import NewLeague from '../components/NewLeague'

import UserContext from '../user/context'
import { fetchUser } from '../user/actions'

const AppContainer = props => {
  const dispatch = useContext(UserContext)[1]

  // This acts similarly to how componentDidMount functions
  useEffect(() => {
    fetchUser(dispatch)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="">
      <Route exact path="/" component={Welcome} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/leagues" component={Leagues} />
      <Route path="/newleague" component={NewLeague} />
    </div>
  )
}

export default AppContainer
