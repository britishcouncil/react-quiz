import React from 'react'
import Answer from './Answer'

const Question = ({instruction, text, answers, selectedAnswer, onAnswer}) => (
  <div>
    <p>{instruction}</p>
    <p>{text}</p>
    <ul>
      {answers.map((a, i) => (
        <Answer key={i}
                active={i === selectedAnswer}
                onClick={() => onAnswer(i)}>{a}</Answer>
      ))}
    </ul>
  </div>
)

Question.propTypes = {
  instruction: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  correct: React.PropTypes.number,
  answers: React.PropTypes.array.isRequired
}

export default Question
