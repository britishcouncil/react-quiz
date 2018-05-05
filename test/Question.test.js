import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Question from '../src/Question'
import questions from './_questions.js'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders answers', t => {
  const question = questions[0]
  const w = shallow(<Question {...question} />)

  t.is(w.find('Answer').length, question.answers.length)
})

test('Question instruction class name', t => {
  const question = questions[0]
  const w = shallow(
    <Question {...question}
              customClassNames={{'rq-Question-instruction': 'some-class-name'}}/>)

  t.true(w.find('.rq-Question-instruction').hasClass('some-class-name'))
})

test('Question answer list class name', t => {
  const question = questions[0]
  const w = shallow(
    <Question {...question}
              customClassNames={{'rq-Question-answerList': 'some-class-name'}}/>)

  t.true(w.find('.rq-Question-answerList').hasClass('some-class-name'))
})
