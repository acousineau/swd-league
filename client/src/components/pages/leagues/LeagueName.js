import React from 'react'

const LeagueName = ({ name, setName, nameSaved, saveName }) => {
  const save = e => {
    e.preventDefault()
    if (!name) return
    saveName(true)
    return
  }

  const editName = e => {
    saveName(false)
  }

  if (nameSaved !== true) {
    return (
      <form onSubmit={save}>
        <input type="text" className="name" value={name} onChange={e => setName(e.target.value)} />
      </form>
    )
  } else {
    return (
      <div className="savedName">
        <h2>{name}</h2>
        <button className="editName" onClick={editName} />
      </div>
    )
  }
}

export default LeagueName
