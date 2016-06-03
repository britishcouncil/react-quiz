import React from 'react'

const Answer = ({ active, onClick, children }) => (
  <li>
    <button onClick={onClick}
            className={active ? 'active' : null}>{children}</button>
  </li>
)

export default Answer
