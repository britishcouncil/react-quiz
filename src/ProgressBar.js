import React from 'react'
import classNames from 'classnames'

const ProgressBar = ({ min = 0, max = 100, value = 0, customClassNames }) => {
  const progressSize = {
    width: ((value - min) / (max - min) * 100) + '%'
  }

  // Displays the progress bar size accordingly max, min, current value and isVisible
  return (
    <div className={classNames('rq-ProgressBar', customClassNames['rq-ProgressBar'])}>
      <div className={classNames('rq-ProgressBar-inner', customClassNames['rq-ProgressBar-inner'])} role="progressbar"
           aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
           style={progressSize}>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
}

export default ProgressBar
