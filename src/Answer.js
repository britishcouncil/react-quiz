import React from 'react'
import classNames from 'classnames'

const Answer = ({ active, onClick, children, answerButtonClassName }) => (
  <li className="rq-Answer">
    <button onClick={onClick}
            className={classNames('rq-Answer-button', answerButtonClassName, {'rq-Answer-button--active': active})}>{children}</button>
  </li>
)

Answer.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
  answerButtonClassName: React.PropTypes.string
}

export default Answer
