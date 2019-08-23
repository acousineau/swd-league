import React from 'react'

const PointsUpdate = ({ points, update, type }) => {
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
    <div className="l-col-6">
      <label className=" pointsBox">
        Points Per {type}
        <div className="points-container">
          <button
            className="pointInc"
            onClick={e => e.preventDefault(update(incrementPoints(points)))}
          >
            <i class="fas fa-chevron-up" />
          </button>
          <div className="pointDisplay">{points}</div>
          <button
            className="pointDec"
            onClick={e => e.preventDefault(update(decrementPoints(points)))}
          >
            <i class="fas fa-chevron-down" />
          </button>
        </div>
      </label>
    </div>
  )
}

export default PointsUpdate
