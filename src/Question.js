import React from 'react'
import Answer from './Answer'

class Question extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedAnswer: null
    }
  }

  render () {
    const { instruction, text, correct, answers } = this.props
    return (
      <div>
        <p>{instruction}</p>
        <p>{text}</p>
        {answers.map((a, i) => (
          <Answer key={i}
                  active={i === this.state.selectedAnswer}
                  onClick={() => this.setState({ selectedAnswer: i })}>{a}</Answer>
        ))}
    </div>
    )
  }
}

export default Question
