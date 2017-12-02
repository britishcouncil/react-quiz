import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quiz from '../src/Quiz'
import questions from './_questions'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const findNextButton = (w) => w.findWhere(el => el.matchesElement(<button>Next</button>))
const findFinishButton = (w) => w.findWhere(el => el.matchesElement(<button>Finish</button>))

const defaultTestProps = {
  onAnswer: () => undefined,
  onNext: () => undefined,
  onFinish: () => undefined
}

test('renders a question', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={0} />
  )
  t.is(w.find('Question').length, 1)
})

test('renders the first question', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={0} />
  )
  t.is(w.find('Question').prop('text'), questions[0].text)
})

test('renders Next button', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={0} />
  )
  t.is(findNextButton(w).length, 1)
})

test('renders Finish button if last question', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={questions.length - 1} />
  )
  t.is(findFinishButton(w).length, 1)
})

test('Next button is disabled by default', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={0} />
  )
  t.truthy(findNextButton(w).prop('disabled'))
})

test('Finish button is disabled by default', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={questions.length - 1} />
  )
  t.truthy(findFinishButton(w).prop('disabled'))
})

test('Next button is enabled when an answer is selected', t => {
  // First question, first answer selected.
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{0: 0}}
          currentQuestionIndex={0} />
  )
  t.false(findNextButton(w).prop('disabled'))
})

test('Finish button is enabled when an answer is selected', t => {
  // Last question, first answer selected.
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{[questions.length - 1]: 0}}
          currentQuestionIndex={questions.length - 1} />
  )
  t.false(findFinishButton(w).prop('disabled'))
})

test('Quiz button container class name', t => {
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{}}
          currentQuestionIndex={0}
          customClassNames={{'rq-Quiz-buttonContainer': 'some-class-name'}}/>
  )
  t.true(w.find('.rq-Quiz-buttonContainer').hasClass('some-class-name'))
})

test('Quiz finish button, calls the onFinish function with the answers', t => {
  const onFinish = (answers) => {
    t.deepEqual(answers, {0: 0, 1: 1})
  }
  const w = shallow(
    <Quiz {...defaultTestProps}
          title="The quiz title"
          questions={questions}
          answers={{
            0: 0,
            1: 1
          }}
          currentQuestionIndex={questions.length - 1}
          onFinish={onFinish}
    />
  )
  findFinishButton(w).simulate('click')
})
