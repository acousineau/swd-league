import React from 'react'

const LeaguePoints = ({ points, update, type }) => {
  const incrementPoints = points => {
    if (points < 10) {
      points += 1
    }
    return points
  }

  const decrementPoints = points => {
    if (points > 0) {
      points -= 1
    }
    return points
  }

  return (
    <div className="l-col-6 set-points">
      <label className=" points-wrapper">
        Points Per {type}
        <div className="points-box">
          <div className="point-inc">
            <button
              onClick={e => {
                console.log('Target:', e.target)
                console.log('Current Target:', e.currentTarget)
                e.preventDefault()
                update(incrementPoints(points))
              }}
            >
              <i className="fas fa-chevron-up" />
            </button>
          </div>
          <div className="point-display">{points}</div>
          <div className="point-dec">
            <button
              onClick={e => {
                e.preventDefault()
                update(decrementPoints(points))
              }}
            >
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </div>
      </label>
    </div>
  )
}

export default LeaguePoints
