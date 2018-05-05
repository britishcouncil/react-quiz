import React from 'react'
import Answer from './Answer'
import classNames from 'classnames'
import PropTypes from 'prop-types';

const Question = ({ instruction, text, answers, selectedAnswer, onAnswer,
                      customClassNames = {} }) => {
    const instructionClassName = classNames('rq-Question-instruction', customClassNames['rq-Question-instruction'])
    const textClassName = classNames('rq-Question-text', customClassNames['rq-Question-text'])
    const answerListClassName = classNames('rq-Question-answerList', customClassNames['rq-Question-answerList'])

    const renderText = () => {
        const lines = Array.isArray(text) ? text : [text]

        return lines.map((line, i) =>
            <p key={i} className={textClassName} style={{margin: 0}}>{line}</p>
        )
    }

    return (
        <div>
          <p className={instructionClassName}>{instruction}</p>
            {renderText()}
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
    instruction: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    answers: PropTypes.array.isRequired,
    selectedAnswer: PropTypes.number,
    onAnswer: PropTypes.func
}

export default Question
