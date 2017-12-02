import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const ProgressBar = ({ min = 0, max = 100, value = 0, customClassNames = {} }) => {
    const progressSize = {
        width: ((value - min) / (max - min) * 100) + '%'
    }

    const progressBarClassName = classNames('rq-ProgressBar', customClassNames['rq-ProgressBar'])
    const progressBarInnerClassName = classNames('rq-ProgressBar-inner', customClassNames['rq-ProgressBar-inner'])

    // Displays the progress bar size accordingly max, min, current value and isVisible
    return (
        <div className={progressBarClassName}>
          <div className={progressBarInnerClassName} role="progressbar"
               aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}
               style={progressSize}>
          </div>
        </div>
    )
}

ProgressBar.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
}

export default ProgressBar
