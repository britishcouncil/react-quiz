import React, { Component } from 'react'
import QuizContainer from '../src'
import questions from './questions'

const customClassNames = {
  'rq-Quiz-buttonContainer': '',
  'rq-Question-instruction': 'instruction',
  'rq-Question-answerList': 'answer-list',
  'rq-Answer': 'answer',
  'rq-Answer-button': 'btn bc-btn-gray-cool btn-lg bc-btn-square bc-btn-block answer-button',
  'rq-Answer-button--active': 'active',
  'rq-ProgressBar': 'progress',
  'rq-ProgressBar-inner': 'progress-bar',
  'rq-Quiz-nextButton': 'btn btn-primary pull-right'
}

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <QuizContainer customClassNames={customClassNames}
                       progressTextTemplate="Question {n} of {total}"
                       questions={questions}
                       onFinish={(answers) => console.log(answers)} />
      </div>
    )
  }
}
