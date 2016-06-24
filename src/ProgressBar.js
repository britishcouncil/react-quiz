import React from 'react'
import classNames from 'classnames'

const ProgressBar = ({ min = 0, max = 100, value = 0, progressBarClassName, progressBarInnerClassName }) => {
  const progressSize = {
    width: ((value - min) / (max - min) * 100) + '%'
  }

  // Displays the progress bar size accordingly max, min, current value and isVisible
  return (
    <div className={classNames('rq-ProgressBar', progressBarClassName)}>
      <div className={classNames('rq-ProgressBar-inner', progressBarInnerClassName)} role="progressbar"
           aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
           style={progressSize}>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progressBarClassName: React.PropTypes.string,
  progressBarInnerClassName: React.PropTypes.string
}

export default ProgressBar
