import React, { Component } from 'react'
import QuizContainer from '../src/QuizContainer'
import questions from './questions'

const customClassNames = {
  'rq-Quiz-buttonContainer': '',
  'rq-Question-instruction': '',
  'rq-Question-answerList': '',
  'rq-Answer': '',
  'rq-Answer-button': 'btn bc-btn-gray-cool btn-lg bc-btn-square bc-btn-block',
  'rq-ProgressBar': 'progress',
  'rq-ProgressBar-inner': 'progress-bar',
  'rq-Quiz-nextButton': 'btn btn-primary pull-right'
}

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <QuizContainer customClassNames={customClassNames}
                       nextQuestionClassName="btn btn-primary pull-right"
                       title="Check your level"
                       progressTextTemplate="Question {n} of {total}"
                       questions={questions}
                       onFinished={(answers) => console.log(answers)} />
      </div>
    )
  }
}
