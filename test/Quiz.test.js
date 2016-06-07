import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'
import questions from './_questions'

const findFirstAnswer = (w) => w.find('Question').first().shallow().find('Answer').first()
const findNextButton = (w) => w.findWhere(el => el.matchesElement(<button>Next</button>))
const findFinishButton = (w) => w.findWhere(el => el.matchesElement(<button>Finish</button>))


test('renders title', t => {
  const w = shallow(<Quiz title="The quiz title" questions={questions} />)
  t.true(w.text().includes('The quiz title'))
})

test('renders a question', t => {
  const w = shallow(<Quiz questions={questions} />)

  t.is(w.find('Question').length, 1)
})

test('renders the first question', t => {
  const w = shallow(<Quiz questions={questions} />)

  t.is(w.find('Question').prop('text'), questions[0].text)
})

test('renders Next button', t => {
  const w = shallow(<Quiz questions={questions} />)
  t.is(w.find('button').text(), 'Next')
})

test('renders Finish button if last question', t => {
  const w = shallow(<Quiz questions={[questions[questions.length - 1]]} />)
  t.is(w.find('button').text(), 'Finish')
})

test('clicking on an answer sets it to active', t => {
  const w = shallow(<Quiz questions={questions} />)

  findFirstAnswer(w).shallow().find('button').simulate('click')
  w.update()

  t.true(findFirstAnswer(w).prop('active'))
})

test('Next button is disabled by default', t => {
  const w = shallow(<Quiz questions={questions} />)
  t.truthy(findNextButton(w).prop('disabled'))
})

test('Next button is enabled when an answer is selected', t => {
  const w = shallow(<Quiz questions={questions} />)

  // First question, third answer selected.
  w.setState({
    currentQuestionIndex: 0,
    answers: {
      0: 2
    }
  })

  t.false(findNextButton(w).prop('disabled'))
})

test('Finish button is disabled by default', t => {
  const w = shallow(<Quiz questions={[questions[questions.length - 1]]} />)
  t.truthy(findFinishButton(w).prop('disabled'))
})

test('Finish button is enabled when an answer is selected', t => {
  const w = shallow(<Quiz questions={questions} />)

  // Last question, third answer selected.
  w.setState({
    currentQuestionIndex: questions.length - 1,
    answers: {
      [questions.length - 1]: 2
    }
  })

  t.false(findFinishButton(w).prop('disabled'))
})

test('clicking Next renders the next question', t => {
  const w = shallow(<Quiz questions={questions} />)

  // First question, second answer selected.
  w.setState({
    currentQuestionIndex: 0,
    answers: {
      0: 1
    }
  })

  findNextButton(w).simulate('click')
  t.is(w.find('Question').prop('text'), questions[1].text)
})
