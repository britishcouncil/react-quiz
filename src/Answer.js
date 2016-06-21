import React from 'react'

const Answer = ({ active = false, onClick, children }) => (
  <li>
    <button onClick={onClick}
            className={active ? 'active' : null}>{children}</button>
  </li>
)

Answer.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
}

export default Answer
