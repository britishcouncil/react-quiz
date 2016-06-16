import React from 'react'
import Question from './Question'

const Quiz = ({ title, questions, answers, currentQuestionIndex, onAnswer,
  onNext, onFinished, answerButtonClassName, nextQuestionClassName }) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  return (
    <div>
      <h1>{title}</h1>
      <Question answerButtonClassName={answerButtonClassName}
                onAnswer={onAnswer}
                selectedAnswer={answers[currentQuestionIndex]}
                {...questions[currentQuestionIndex]} />
      <div className="rq-Quiz-buttonContainer">
        {isLastQuestion
          ? <button className={nextQuestionClassName}
                    onClick={onFinished}
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
  answerButtonClassName: React.PropTypes.string,
  nextQuestionClassName: React.PropTypes.string
}

export default Quiz
