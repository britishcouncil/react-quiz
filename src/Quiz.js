import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  render () {
    const { title, question } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <Question {...question} />
      </div>
    )
  }
}

Quiz.propTypes = {
  title: React.PropTypes.string,
  // Note: This will change to be a list of questions.
  question: React.PropTypes.object.isRequired
}

export default Quiz
