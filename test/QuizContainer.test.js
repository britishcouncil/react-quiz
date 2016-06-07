import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import QuizContainer from '../src/QuizContainer'
import questions from './_questions'

const getQuiz = (w) => w.find('Quiz').shallow()
const findQuestion = (w) => getQuiz(w).find('Question')
const findFirstAnswer = (w) => getQuiz(w).find('Question').shallow().find('Answer').first()
const findNextButton = (w) => getQuiz(w).findWhere(el => el.matchesElement(<button>Next</button>))
const findFinishButton = (w) => getQuiz(w).findWhere(el => el.matchesElement(<button>Finish</button>))


test('renders title', t => {
  const w = shallow(<QuizContainer title="The quiz title" questions={questions} />)
  t.true(getQuiz(w).text().includes('The quiz title'))
})

test('renders a question', t => {
  const w = shallow(<QuizContainer questions={questions} />)
  t.is(findQuestion(w).length, 1)
})

test('renders the first question', t => {
  const w = shallow(<QuizContainer questions={questions} />)
  t.is(findQuestion(w).prop('text'), questions[0].text)
})

test('renders Next button', t => {
  const w = shallow(<QuizContainer questions={questions} />)
  t.is(getQuiz(w).find('button').text(), 'Next')
})

test('renders Finish button if last question', t => {
  const w = shallow(<QuizContainer questions={[questions[questions.length - 1]]} />)
  t.is(getQuiz(w).find('button').text(), 'Finish')
})

test('clicking on an answer sets it to active', t => {
  const w = shallow(<QuizContainer questions={questions} />)

  findFirstAnswer(w).shallow().find('button').simulate('click')
  w.update()

  t.true(findFirstAnswer(w).prop('active'))
})

test('Next button is disabled by default', t => {
  const w = shallow(<QuizContainer questions={questions} />)
  t.truthy(findNextButton(w).prop('disabled'))
})

test('Next button is enabled when an answer is selected', t => {
  const w = shallow(<QuizContainer questions={questions} />)
  // First question, third answer selected.
  w.setState({
    currentQuestionIndex: 0,
    answers: {
      0: 0
    }
  })

  t.false(findNextButton(w).prop('disabled'))
})

test('Finish button is disabled by default', t => {
  const w = shallow(<QuizContainer questions={[questions[questions.length - 1]]} />)
  t.truthy(findFinishButton(w).prop('disabled'))
})

test('Finish button is enabled when an answer is selected', t => {
  const w = shallow(<QuizContainer questions={questions} />)

  // Last question, third answer selected.
  w.setState({
    currentQuestionIndex: questions.length - 1,
    answers: {
      [questions.length - 1]: 0
    }
  })

  t.false(findFinishButton(w).prop('disabled'))
})

test('clicking Next renders the next question', t => {
  const w = shallow(<QuizContainer questions={questions} />)

  // First question, second answer selected.
  w.setState({
    currentQuestionIndex: 0,
    answers: {
      0: 1
    }
  })

  findNextButton(w).simulate('click')
  w.update()

  t.is(findQuestion(w).prop('text'), questions[1].text)
})
