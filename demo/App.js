import React, { Component } from 'react'
import QuizContainer from '../src/QuizContainer'
import questions from './questions'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <QuizContainer progressBarClassName="progress"
                       progressBarInnerClassName="progress-bar"
                       answerButtonClassName="btn bc-btn-gray-cool btn-lg bc-btn-square bc-btn-block"
                       answerClassName=""
                       questionInstructionClassName=""
                       questionAnswerListClassName=""
                       quizButtonContainerClassName=""
                       nextQuestionClassName="btn btn-primary pull-right"
                       title="Check your level"
                       questions={questions}
                       onFinished={(answers) => console.log(answers)} />
      </div>
    )
  }
}
