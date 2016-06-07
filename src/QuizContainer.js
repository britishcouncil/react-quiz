import React from 'react'
import Quiz from './Quiz'

/*
  Connects Quiz to state.

  Separating QuizContainer from Quiz allows you to swap this QuizContainer for
  your own if you'd like, one that connects to Redux for example.
*/
class QuizContainer extends React.Component {
  state = {
    currentQuestionIndex: 0,
    answers: {}
  }

  render () {
    const onAnswer = (selectedAnswer) => {
      this.setState({
        ...this.state,
        answers: {
          ...this.state.answers,
          [this.state.currentQuestionIndex]: selectedAnswer
        }})
    }

    const onNext = () => this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    })

    const onFinished = () => {
      // To be implemented
    }

    return <Quiz title={this.props.title}
                 questions={this.props.questions}
                 currentQuestionIndex={this.state.currentQuestionIndex}
                 answers={this.state.answers}
                 onAnswer={onAnswer}
                 onNext={onNext}
                 onFinished={onFinished} />
  }
}

QuizContainer.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired
}

export default QuizContainer
