import React from 'react'
import Answer from './Answer'

const Question = ({ instruction, text, correct, answers }) => (
  <div>
    <p>{instruction}</p>
    <p>{text}</p>
    {answers.map((a, i) => <Answer key={i}>{a}</Answer>)}
  </div>
)

export default Question
