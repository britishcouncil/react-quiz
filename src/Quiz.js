import React from 'react'
import Question from './Question'

class Quiz extends React.Component {
  render () {
    return (
      <Question {...this.props.question} />
    )
  }
}

export default Quiz
