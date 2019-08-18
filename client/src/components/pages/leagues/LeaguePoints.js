import React from 'react'

const PointsUpdate = ({ winPoints, updateWin, gamePoints, updateGame }) => {
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
    <form className="l-row pointCounters form-section">
      <div className="l-col-6">
        <label className=" pointsBox">
          Points Per Win
          <div className="points">
            <button
              className="pointInc"
              onClick={e => e.preventDefault(updateWin(incrementPoints(winPoints)))}
            >
              +
            </button>
            <div className="pointDisplay">{winPoints}</div>
            <button
              className="pointDec"
              onClick={e => e.preventDefault(updateWin(decrementPoints(winPoints)))}
            >
              -
            </button>
          </div>
        </label>
      </div>
      <div className="l-col-6">
        <label className=" pointsBox">
          Points Per Game
          <div className="points">
            <button
              className="pointInc"
              onClick={e => e.preventDefault(updateGame(incrementPoints(gamePoints)))}
            >
              +
            </button>
            <div className="pointDisplay">{gamePoints}</div>
            <button
              className="pointDec"
              onClick={e => e.preventDefault(updateGame(decrementPoints(gamePoints)))}
            >
              -
            </button>
          </div>
        </label>
      </div>
    </form>
  )
}

export default PointsUpdate
