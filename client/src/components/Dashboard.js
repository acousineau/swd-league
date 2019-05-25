import React, { useContext } from 'react'
import UserContext from '../user/context'

const Dashboard = props => {
  const userState = useContext(UserContext)[0]
  return (
    <div>
      <h2>Dashboard</h2>
      <a
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-auto inline-block"
        href="/auth/discord"
      >
        <i className="fab fa-discord" />
        &nbsp;&nbsp;Connect Discord
      </a>
    </div>
  )
}

export default Dashboard
