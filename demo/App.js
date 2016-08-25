import React, { Component } from 'react'
import QuizContainer from '../src'
import questions from './questions'

// You can pass custom classNames in. Useful if you want to add your own CSS
// classes to elements. The className will be appended to the existing one.
// (Alternatively you can select on these selectors in your CSS to add styling.)
const customClassNames = {
  'rq-Quiz-buttonContainer': '',
  'rq-Question-instruction': 'instruction',
  'rq-Question-text': '',
  'rq-Question-answerList': 'answer-list',
  'rq-Answer': 'answer',
  'rq-Answer-button': 'btn bc-btn-gray-cool btn-lg bc-btn-square bc-btn-block answer-button',
  'rq-Answer-button--active': 'active',
  'rq-ProgressBar': 'progress',
  'rq-ProgressBar-inner': 'progress-bar',
  'rq-Quiz-nextButton': 'btn btn-primary pull-right'
}

// You can override text in a similar way, e.g. if you want to translate the
// component to different languages.
const customText = {
  // 'rq-Quiz-progressText': 'Question {n} of {total}',
  // 'rq-Quiz-nextButton': 'Onwards',
  // 'rq-Quiz-nextButton--finish': 'Enough of this I say!'
}

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <QuizContainer customClassNames={customClassNames}
                       customText={customText}
                       questions={questions}
                       onFinish={(answers) => console.log(answers)} />
      </div>
    )
  }
}
