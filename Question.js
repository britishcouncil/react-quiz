'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Answer = require('./Answer');

var _Answer2 = _interopRequireDefault(_Answer);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Question = function Question(_ref) {
  var instruction = _ref.instruction;
  var text = _ref.text;
  var answers = _ref.answers;
  var selectedAnswer = _ref.selectedAnswer;
  var onAnswer = _ref.onAnswer;
  var answerButtonClassName = _ref.answerButtonClassName;
  var answerClassName = _ref.answerClassName;
  var questionInstructionClassName = _ref.questionInstructionClassName;
  var questionAnswerListClassName = _ref.questionAnswerListClassName;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      { className: (0, _classnames2.default)('rq-Question-instruction', questionInstructionClassName) },
      instruction
    ),
    _react2.default.createElement(
      'p',
      null,
      text
    ),
    _react2.default.createElement(
      'ol',
      { className: (0, _classnames2.default)('rq-Question-answerList', questionAnswerListClassName) },
      answers.map(function (a, i) {
        return _react2.default.createElement(
          _Answer2.default,
          { answerButtonClassName: answerButtonClassName,
            answerClassName: answerClassName,
            key: i,
            active: i === selectedAnswer,
            onClick: function onClick() {
              return onAnswer(i);
            } },
          a
        );
      })
    )
  );
};

Question.propTypes = {
  instruction: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string.isRequired,
  answers: _react2.default.PropTypes.array.isRequired,
  selectedAnswer: _react2.default.PropTypes.number,
  onAnswer: _react2.default.PropTypes.func,
  answerButtonClassName: _react2.default.PropTypes.string,
  answerClassName: _react2.default.PropTypes.string,
  questionInstructionClassName: _react2.default.PropTypes.string,
  questionAnswerListClassName: _react2.default.PropTypes.string
};

exports.default = Question;