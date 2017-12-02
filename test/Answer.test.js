import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Answer from '../src/Answer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
    <Answer active={false} customClassNames={{'rq-Answer': 'some-class-name'}}>An answer</Answer>)

  t.true(w.find('.rq-Answer').hasClass('some-class-name'))
})

test('Button class name', t => {
  const w = shallow(
    <Answer active={false} customClassNames={{'rq-Answer-button': 'some-class-name'}}>An answer</Answer>)

  t.true(w.find('.rq-Answer-button').hasClass('some-class-name'))
})
