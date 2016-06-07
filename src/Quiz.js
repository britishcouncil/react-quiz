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
                    disabled={!answers[currentQuestionIndex]}>Finish</button>
          : <button onClick={onNext}
                    disabled={!answers[currentQuestionIndex]}>Next</button>
        }
      </div>
    </div>
  )
}

Quiz.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired
}

export default Quiz
