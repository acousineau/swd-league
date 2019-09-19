import React from 'react'

const LeagueName = ({ name, setName }) => {
  return (
    <label>
      League Name
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </label>
  )
}

export default LeagueName
