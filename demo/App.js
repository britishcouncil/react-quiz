import React, { Component } from 'react'
import QuizContainer from '../src/QuizContainer'
import questions from './questions'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <QuizContainer title="Check your level" questions={questions} />
      </div>
    )
  }
}
