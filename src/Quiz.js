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
    const isLastQuestion = (this.state.currentQuestionIndex + 1) === this.props.questions.length

    const onClickNext = () => {
      if (isLastQuestion) {
        // To be implemented
      } else {
        this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1})
      }
    }

    const onAnswer = (selectedAnswer) => {
      this.setState({
        ...this.state,
        answers: {
          ...this.state.answers,
          [this.state.currentQuestionIndex]: selectedAnswer
        }})
    }

    return (
      <div>
        <h1>{title}</h1>
        <Question onAnswer={onAnswer}
                  selectedAnswer={answers[currentQuestionIndex]}
                  {...questions[currentQuestionIndex]} />
        <div className="Quiz-buttonContainer">
          <button onClick={onClickNext}>{isLastQuestion ? 'Finish' : 'Next'}</button>
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
