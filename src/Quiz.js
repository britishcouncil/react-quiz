import React from 'react'
import Question from './Question'

const Quiz = ({ title, questions, answers, currentQuestionIndex, onAnswer,
  onNext, onFinished }) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  return (
    <div>
      <h1>{title}</h1>
      <Question onAnswer={onAnswer}
                selectedAnswer={answers[currentQuestionIndex]}
                {...questions[currentQuestionIndex]} />
      <div className="Quiz-buttonContainer">
        {isLastQuestion
          ? <button onClick={onFinished}
                    disabled={answers[currentQuestionIndex] === undefined}>Finish</button>
          : <button onClick={onNext}
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
  onFinished: React.PropTypes.func.isRequired
}

export default Quiz
