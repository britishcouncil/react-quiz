import React from 'react'
import classNames from 'classnames'

const Answer = ({ active, onClick, children }) => (
  <li>
    <button onClick={onClick}
            className={classNames('Quiz-answer', {active: active})}>{children}</button>
  </li>
)

Answer.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
}

export default Answer
