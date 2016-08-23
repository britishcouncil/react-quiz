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
  var _ref$customClassNames = _ref.customClassNames;
  var customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;

  var instructionClassName = (0, _classnames2.default)('rq-Question-instruction', customClassNames['rq-Question-instruction']);
  var answerListClassName = (0, _classnames2.default)('rq-Question-answerList', customClassNames['rq-Question-answerList']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      { className: instructionClassName },
      instruction
    ),
    _react2.default.createElement(
      'p',
      null,
      text
    ),
    _react2.default.createElement(
      'ol',
      { className: answerListClassName },
      answers.map(function (a, i) {
        return _react2.default.createElement(
          _Answer2.default,
          { customClassNames: customClassNames,
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
  onAnswer: _react2.default.PropTypes.func
};

exports.default = Question;