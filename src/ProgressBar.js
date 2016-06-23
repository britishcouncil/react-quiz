import React from 'react'

const ProgressBar = ({ min = 0, max = 100, value = 0}) => {
  const progressSize = {
    width: ((value - min) / (max - min) * 100) + '%'
  }

  // Displays the progress bar size accordingly max, min, current value and isVisible
  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar"
           aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
           style={progressSize}>
      </div>
    </div>
  )
}

export default ProgressBar
