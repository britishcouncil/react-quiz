import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'

const Quiz = ({ questions, answers, currentQuestionIndex, onAnswer, onNext,
  onFinish, customClassNames = {}, customText = {}}) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  return (
    <div>
      <p className={classNames('rq-Quiz-progressText', customClassNames['rq-Quiz-progressText'])}>
        {interpolate(customText['rq-Quiz-progressText'] || 'Question {n} of {total}', {
          n: currentQuestionIndex + 1,
          total: questions.length
        })}
      </p>
      <ProgressBar value={currentQuestionIndex + 1}
                   max={questions.length}
                   customClassNames={customClassNames} />
      <Question customClassNames={customClassNames}
                onAnswer={onAnswer}
                selectedAnswer={answers[currentQuestionIndex]}
                {...questions[currentQuestionIndex]} />
      <div className={classNames('rq-Quiz-buttonContainer', customClassNames['rq-Quiz-buttonContainer'])}>
        {isLastQuestion
          ? <button className={classNames('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton'])}
                    onClick={() => onFinish(answers)}
                    disabled={answers[currentQuestionIndex] === undefined}>{customText['rq-Quiz-nextButton--finish'] || 'Finish'}</button>
          : <button className={classNames('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton'])}
                    onClick={onNext}
                    disabled={answers[currentQuestionIndex] === undefined}>{customText['rq-Quiz-nextButton'] || 'Next'}</button>
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
