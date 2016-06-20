import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Answer from '../src/Answer'

test('does not have the CSS class `active` by default', t => {
  const w = shallow(<Answer active={false}>An answer</Answer>)
  t.not(w.find('button').hasClass('rq-Answer-button--active'))
})

test('the `active` prop sets the CSS class `active`', t => {
  const w = shallow(<Answer active={true}>An answer</Answer>)
  t.true(w.find('button').hasClass('rq-Answer-button--active'))
})

test('Answer list item class name', t => {
  const w = shallow(
    <Answer active={false} answerClassName="some-class-name">An answer</Answer>)

  t.true(w.find('.rq-Answer').hasClass('some-class-name'))
})

test('Button class name', t => {
  const w = shallow(
    <Answer active={false} answerButtonClassName="some-class-name">An answer</Answer>)

  t.true(w.find('.rq-Answer-button').hasClass('some-class-name'))
})
