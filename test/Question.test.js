import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Question from '../src/Question'
import questions from './_questions.js'

test('renders answers', t => {
  const question = questions[0]
  const w = shallow(<Question {...question} />)

  t.is(w.find('Answer').length, question.answers.length)
})

test('clicking an Answer sets it to active', t => {
  const question = questions[0]
  const w = shallow(<Question {...question} />)

  w.find('Answer').first().shallow().find('button').simulate('click')
  w.update()

  t.true(w.find('Answer').first().prop('active'))
})
