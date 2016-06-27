import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'

const Quiz = ({ title, questions, answers, currentQuestionIndex, onAnswer,
  onNext, onFinished, progressTextTemplate = 'Question {n} of {total}',
  customClassNames }) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  return (
    <div>
      <h1>{title}</h1>
      <p>{interpolate(progressTextTemplate, {
        n: currentQuestionIndex + 1,
        total: questions.length
      })}</p>
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
                    onClick={() => onFinished(answers)}
                    disabled={answers[currentQuestionIndex] === undefined}>Finish</button>
          : <button className={classNames('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton'])}
                    onClick={onNext}
                    disabled={answers[currentQuestionIndex] === undefined}>Next</button>
        }
      </div>
    </div>
  )
}

Quiz.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired,
  answers: React.PropTypes.object.isRequired,
  currentQuestionIndex: React.PropTypes.number.isRequired,
  onAnswer: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinished: React.PropTypes.func.isRequired,
  progressTextTemplate: React.PropTypes.string
}

export default Quiz
