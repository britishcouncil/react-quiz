import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'

const Quiz = ({ title, questions, answers, currentQuestionIndex, onAnswer,
  onNext, onFinished, progressBarClassName, progressBarInnerClassName, answerButtonClassName, nextQuestionClassName, answerClassName, questionInstructionClassName, questionAnswerListClassName, quizButtonContainerClassName }) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  return (
    <div>
      <h1>{title}</h1>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <ProgressBar value={currentQuestionIndex + 1}
                   max={questions.length}
                   progressBarClassName={progressBarClassName}
                   progressBarInnerClassName={progressBarInnerClassName}/>
      <Question answerButtonClassName={answerButtonClassName}
                answerClassName={answerClassName}
                questionInstructionClassName={questionInstructionClassName}
                questionAnswerListClassName={questionAnswerListClassName}
                onAnswer={onAnswer}
                selectedAnswer={answers[currentQuestionIndex]}
                {...questions[currentQuestionIndex]} />
      <div className={classNames('rq-Quiz-buttonContainer', quizButtonContainerClassName)}>
        {isLastQuestion
          ? <button className={nextQuestionClassName}
                    onClick={() => onFinished(answers)}
                    disabled={answers[currentQuestionIndex] === undefined}>Finish</button>
          : <button className={nextQuestionClassName}
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
  progressBarClassName: React.PropTypes.string,
  progressBarInnerClassName: React.PropTypes.string,
  answerButtonClassName: React.PropTypes.string,
  nextQuestionClassName: React.PropTypes.string,
  answerClassName: React.PropTypes.string,
  questionInstructionClassName: React.PropTypes.string,
  questionAnswerListClassName: React.PropTypes.string,
  quizButtonContainerClassName: React.PropTypes.string
}

export default Quiz
