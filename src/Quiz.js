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

export default Quiz
