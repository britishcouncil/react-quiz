import React from 'react'

const Question = ({ instruction, text, correct, answers }) => (
  <div>
    <p>{instruction}</p>
    <p>{text}</p>
    {answers.map(a => <div>{a}</div>)}
  </div>
)

export default Question
