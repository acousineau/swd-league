import React from 'react'

const SearchPlayers = ({ search, updateSearch, searching, isSearching }) => {
  const showSearch = search => {
    if (!search) {
      return <i class="fas fa-search" />
    }
  }

  return (
    <div className="l-row search-bar form-section">
      <label className="l-col-12">
        Add Players
        <input
          type="text"
          className="input"
          value={search}
          onFocus={e => isSearching(true)}
          onBlur={e => {
            if (!search) {
              isSearching(false)
            }
          }}
          onChange={e => updateSearch(e.target.value)}
        />
        {showSearch(searching)}
      </label>
    </div>
  )
}
export default SearchPlayers
