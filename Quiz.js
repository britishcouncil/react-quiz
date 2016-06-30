'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Question = require('./Question');

var _Question2 = _interopRequireDefault(_Question);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quiz = function Quiz(_ref) {
  var title = _ref.title;
  var questions = _ref.questions;
  var answers = _ref.answers;
  var currentQuestionIndex = _ref.currentQuestionIndex;
  var onAnswer = _ref.onAnswer;
  var onNext = _ref.onNext;
  var onFinished = _ref.onFinished;
  var answerButtonClassName = _ref.answerButtonClassName;
  var nextQuestionClassName = _ref.nextQuestionClassName;
  var answerClassName = _ref.answerClassName;
  var questionInstructionClassName = _ref.questionInstructionClassName;
  var questionAnswerListClassName = _ref.questionAnswerListClassName;
  var quizButtonContainerClassName = _ref.quizButtonContainerClassName;

  var isLastQuestion = currentQuestionIndex + 1 === questions.length;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(_Question2.default, _extends({ answerButtonClassName: answerButtonClassName,
      answerClassName: answerClassName,
      questionInstructionClassName: questionInstructionClassName,
      questionAnswerListClassName: questionAnswerListClassName,
      onAnswer: onAnswer,
      selectedAnswer: answers[currentQuestionIndex]
    }, questions[currentQuestionIndex])),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('rq-Quiz-buttonContainer', quizButtonContainerClassName) },
      isLastQuestion ? _react2.default.createElement(
        'button',
        { className: nextQuestionClassName,
          onClick: onFinished,
          disabled: answers[currentQuestionIndex] === undefined },
        'Finish'
      ) : _react2.default.createElement(
        'button',
        { className: nextQuestionClassName,
          onClick: onNext,
          disabled: answers[currentQuestionIndex] === undefined },
        'Next'
      )
    )
  );
};

Quiz.propTypes = {
  title: _react2.default.PropTypes.string,
  questions: _react2.default.PropTypes.array.isRequired,
  answers: _react2.default.PropTypes.object.isRequired,
  currentQuestionIndex: _react2.default.PropTypes.number.isRequired,
  onAnswer: _react2.default.PropTypes.func.isRequired,
  onNext: _react2.default.PropTypes.func.isRequired,
  onFinished: _react2.default.PropTypes.func.isRequired,
  answerButtonClassName: _react2.default.PropTypes.string,
  nextQuestionClassName: _react2.default.PropTypes.string,
  answerClassName: _react2.default.PropTypes.string,
  questionInstructionClassName: _react2.default.PropTypes.string,
  questionAnswerListClassName: _react2.default.PropTypes.string,
  quizButtonContainerClassName: _react2.default.PropTypes.string
};

exports.default = Quiz;