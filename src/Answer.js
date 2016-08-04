import React from 'react'
import classNames from 'classnames'

const Answer = ({ active, onClick, children, customClassNames = {} }) => {
  const answerClassName = classNames('rq-Answer', customClassNames['rq-Answer'])
  const answerButtonClassName = classNames('rq-Answer-button',
    customClassNames['rq-Answer-button'],
    { 'rq-Answer-button--active': active,
      [customClassNames['rq-Answer-button--active']]: active
    })

  return (
    <li className={answerClassName}>
      <button onClick={onClick}
              className={answerButtonClassName}>{children}</button>
    </li>
  )
}

Answer.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
}

export default Answer
