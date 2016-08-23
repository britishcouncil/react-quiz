import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'

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
  questions: React.PropTypes.array.isRequired,
  answers: React.PropTypes.object.isRequired,
  currentQuestionIndex: React.PropTypes.number.isRequired,
  onAnswer: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func.isRequired,
  progressTextTemplate: React.PropTypes.string
}

export default Quiz
