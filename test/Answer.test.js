import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Answer from '../src/Answer'

test('does not have the CSS class `active` by default', t => {
  const w = shallow(<Answer active={false}>An answer</Answer>)
  t.not(w.find('button').hasClass('active'))
})

test('the `active` prop sets the CSS class `active`', t => {
  const w = shallow(<Answer active={true}>An answer</Answer>)
  t.true(w.find('button').hasClass('active'))
})
