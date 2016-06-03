import React from 'react'

const Answer = ({ active, onClick, children }) => (
  <div onClick={onClick}
       className={active ? 'active' : null}>{children}</div>
)

export default Answer
