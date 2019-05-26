import React from 'react'

const UserInfo = props => {
  const { displayName } = props
  return (
    <form className="UserInfo">
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Display Name"
            id="name"
            type="text"
            className="validate"
            defaultValue={displayName || ''}
          />
          <label htmlFor="name" className="active">
            Display Name
          </label>
        </div>
      </div>
    </form>
  )
}

export default UserInfo
