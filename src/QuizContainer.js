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

  onAnswer = (selectedAnswer) => {
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [this.state.currentQuestionIndex]: selectedAnswer
      }})
  }

  onNext = () => this.setState({
    currentQuestionIndex: this.state.currentQuestionIndex + 1
  })

  render () {
    return <Quiz title={this.props.title}
                 questions={this.props.questions}
                 currentQuestionIndex={this.state.currentQuestionIndex}
                 answers={this.state.answers}
                 onAnswer={this.onAnswer}
                 onNext={this.onNext}
                 onFinished={this.props.onFinished}
                 progressBarClassName={this.props.progressBarClassName}
                 progressBarInnerClassName={this.props.progressBarInnerClassName}
                 answerButtonClassName={this.props.answerButtonClassName}
                 answerClassName={this.props.answerClassName}
                 nextQuestionClassName={this.props.nextQuestionClassName}
                 questionInstructionClassName={this.props.questionInstructionClassName}
                 questionAnswerListClassName={this.props.questionAnswerListClassName}
                 quizButtonContainerClassName={this.props.quizButtonContainerClassName}
    />
  }
}

QuizContainer.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired,
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

export default QuizContainer
