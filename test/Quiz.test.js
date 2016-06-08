import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'

test('renders Hello', t => {
  const w = shallow(<Quiz />)
  t.true(w.text().includes('Hello'))
})
