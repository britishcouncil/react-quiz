import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'
import questions from './_questions'

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

test('clicking on an answer sets it to active', t => {
  const w = shallow(<Quiz questions={questions} />)
  const findFirstAnswer = () => w.find('Question').first().shallow()
    .find('Answer').first()

  findFirstAnswer().shallow().find('button').simulate('click')
  w.update()

  t.true(findFirstAnswer().prop('active'))
})
