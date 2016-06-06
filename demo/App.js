import React, { Component } from 'react'
import Quiz from '../src/Quiz'
import questions from './questions'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Quiz title="Check your level" questions={questions} />
      </div>
    )
  }
}
