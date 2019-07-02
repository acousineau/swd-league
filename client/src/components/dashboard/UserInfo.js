import React from 'react'

import './UserInfo.scss'

const UserInfo = props => {
  const { displayName } = props
  return (
    <form className="UserInfo">
      <div className="row">
        <div className="input-field col s12">
          <label htmlFor="name" className="active">
            Display Name
          </label>
          <input
            placeholder="Display Name"
            id="name"
            type="text"
            className="validate"
            defaultValue={displayName || ''}
          />
        </div>
      </div>
    </form>
  )
}

export default UserInfo
