import React, { Component } from 'react'
import Quiz from '../src/Quiz'

export default class App extends Component {
  render () {
    const question = {
      instruction: 'Complete the following sentence using a word from the list',
      text: 'A lot of trains ____ late today due to the heavy storms.',
      correct: 1,
      answers: [
        'are run',
        'are running',
        'run'
      ]
    }

    return (
      <div className="App">
        <Quiz question={question} />
      </div>
    )
  }
}
