import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'

test('renders title', t => {
  const w = shallow(<Quiz title="The quiz title" />)
  t.true(w.text().includes('The quiz title'))
})
