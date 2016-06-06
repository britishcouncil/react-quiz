import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  state = {
    currentQuestionIndex: 0
  }

  isLastQuestion = () => (this.state.currentQuestionIndex + 1) === this.props.questions.length

  onClickNext = () => {
    if (this.isLastQuestion()) {
      // Nothing atm
    } else {
      this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1})
    }
  }

  render () {
    const { title, questions } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <Question nextButtonText={this.isLastQuestion() ? 'Finish' : 'Next'}
                  onClickNext={this.onClickNext}
                  {...questions[this.state.currentQuestionIndex]} />
      </div>
    )
  }
}

Quiz.propTypes = {
  title: React.PropTypes.string,
  questions: React.PropTypes.array.isRequired
}

export default Quiz
