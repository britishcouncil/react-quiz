import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'
import PropTypes from 'prop-types';

const Quiz = ({ questions, answers, currentQuestionIndex, onAnswer, onNext,
                  onFinish, customClassNames = {}, customText = {}}) => {
    const isLastQuestion = (currentQuestionIndex + 1) === questions.length

    const progressTextClassName = classNames('rq-Quiz-progressText', customClassNames['rq-Quiz-progressText'])
    const buttonContainerClassName = classNames('rq-Quiz-buttonContainer', customClassNames['rq-Quiz-buttonContainer'])
    const nextButtonClassName = classNames('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton'])

    const finishButtonText = customText['rq-Quiz-nextButton--finish'] || 'Finish'
    const nextButtonText = customText['rq-Quiz-nextButton'] || 'Next'
    const progressText = interpolate(customText['rq-Quiz-progressText'] || 'Question {n} of {total}', {
        n: currentQuestionIndex + 1,
        total: questions.length
    })

    return (
        <div>
          <p className={progressTextClassName}>{progressText}</p>
          <ProgressBar value={currentQuestionIndex + 1}
                       max={questions.length}
                       customClassNames={customClassNames} />
          <Question customClassNames={customClassNames}
                    onAnswer={onAnswer}
                    selectedAnswer={answers[currentQuestionIndex]}
                    {...questions[currentQuestionIndex]} />
          <div className={buttonContainerClassName}>
              {isLastQuestion
                  ? <button className={nextButtonClassName}
                            onClick={() => onFinish(answers)}
                            disabled={answers[currentQuestionIndex] === undefined}>{finishButtonText}</button>
                  : <button className={nextButtonClassName}
                            onClick={onNext}
                            disabled={answers[currentQuestionIndex] === undefined}>{nextButtonText}</button>
              }
          </div>
        </div>
    )
}

Quiz.propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.object.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
    progressTextTemplate: PropTypes.string
}

export default Quiz
