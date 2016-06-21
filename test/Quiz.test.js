import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'
import questions from './_questions'

test('renders title', t => {
  const w = shallow(<Quiz title="The quiz title" question={questions[0]} />)
  t.true(w.text().includes('The quiz title'))
})
