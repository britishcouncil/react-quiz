import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  state = {
    currentQuestionIndex: 0,
    answers: {}
  }

  render () {
    const { title, questions } = this.props
    const { answers, currentQuestionIndex } = this.state
    const isLastQuestion = (currentQuestionIndex + 1) === questions.length

    const onAnswer = (selectedAnswer) => {
      this.setState({
        ...this.state,
        answers: {
          ...answers,
          [currentQuestionIndex]: selectedAnswer
        }})
    }

    const onNext = () => this.setState({
      currentQuestionIndex: currentQuestionIndex + 1
    })

    const onFinished = () => {
      // To be implemented
    }

    return (
      <div>
        <h1>{title}</h1>
        <Question onAnswer={onAnswer}
                  selectedAnswer={answers[currentQuestionIndex]}
                  {...questions[currentQuestionIndex]} />
        <div className="Quiz-buttonContainer">
          {isLastQuestion
            ? <button onClick={onFinished}>Finish</button>
            : <button onClick={onNext}>Next</button>}
        </div>
      </div>
    )
  }
}

Quiz.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired
}

export default Quiz
