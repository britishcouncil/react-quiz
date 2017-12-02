import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import QuizContainer from '../src/QuizContainer'
import questions from './_questions'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const getQuiz = (w) => w.find('Quiz').shallow()
const findQuestion = (w) => getQuiz(w).find('Question')
const findFirstAnswer = (w) => getQuiz(w).find('Question').shallow().find('Answer').first()
const findNextButton = (w) => getQuiz(w).findWhere(el => el.matchesElement(<button>Next</button>))

test('clicking an answer sets it to active', t => {
  const w = shallow(<QuizContainer questions={questions} onFinish={() => undefined} />)

  findFirstAnswer(w).shallow().find('button').simulate('click')
  w.update()

  t.true(findFirstAnswer(w).prop('active'))
})

test('clicking Next renders the next question', t => {
  const w = shallow(<QuizContainer questions={questions} onFinish={() => undefined} />)

  // First question, second answer selected.
  w.setState({
    answers: {0: 1}
  })

  findNextButton(w).simulate('click')
  w.update()

  t.is(findQuestion(w).prop('text'), questions[1].text)
})
