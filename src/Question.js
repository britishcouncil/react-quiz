import React from 'react'
import Answer from './Answer'
import classNames from 'classnames'

const Question = ({ instruction, text, answers, selectedAnswer, onAnswer,
  customClassNames = {} }) => {
  const instructionClassName = classNames('rq-Question-instruction', customClassNames['rq-Question-instruction'])
  const textClassName = classNames('rq-Question-text', customClassNames['rq-Question-text'])
  const answerListClassName = classNames('rq-Question-answerList', customClassNames['rq-Question-answerList'])

  return (
    <div>
      <p className={instructionClassName}>{instruction}</p>
      <p className={textClassName}>{text}</p>
      <ol className={answerListClassName}>
        {answers.map((a, i) => (
          <Answer customClassNames={customClassNames}
                  key={i}
                  active={i === selectedAnswer}
                  onClick={() => onAnswer(i)}>{a}</Answer>
        ))}
      </ol>
    </div>
  )
}

Question.propTypes = {
  instruction: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  answers: React.PropTypes.array.isRequired,
  selectedAnswer: React.PropTypes.number,
  onAnswer: React.PropTypes.func
}

export default Question
