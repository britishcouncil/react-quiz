import React from 'react'
import Answer from './Answer'
import classNames from 'classnames'

const Question = ({ instruction, text, answers, selectedAnswer, onAnswer, answerButtonClassName, answerClassName, questionInstructionClassName, questionAnswerListClassName }) => (
  <div>
    <p className={classNames('rq-Question-instruction', questionInstructionClassName)}>{instruction}</p>
    <p>{text}</p>
    <ol className={classNames('rq-Question-answerList', questionAnswerListClassName)}>
      {answers.map((a, i) => (
        <Answer answerButtonClassName={answerButtonClassName}
                answerClassName={answerClassName}
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
  answerButtonClassName: React.PropTypes.string,
  answerClassName: React.PropTypes.string,
  questionInstructionClassName: React.PropTypes.string,
  questionAnswerListClassName: React.PropTypes.string
}

export default Question
