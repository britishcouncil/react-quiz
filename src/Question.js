import React from 'react'
import Answer from './Answer'

const Question = ({instruction, text, answers, selectedAnswer, onAnswer, answerButtonClassName}) => (
  <div>
    <p>{instruction}</p>
    <p>{text}</p>
    <ol className="rq-Question-answerList">
      {answers.map((a, i) => (
        <Answer answerButtonClassName={answerButtonClassName}
                key={i}
                active={i === selectedAnswer}
                onClick={() => onAnswer(i)}>{a}</Answer>
      ))}
    </ol>
  </div>
)

Question.propTypes = {
  instruction: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  answers: React.PropTypes.array.isRequired,
  selectedAnswer: React.PropTypes.number,
  onAnswer: React.PropTypes.func,
  answerButtonClassName: React.PropTypes.string
}

export default Question
