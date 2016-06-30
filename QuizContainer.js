'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Quiz = require('./Quiz');

var _Quiz2 = _interopRequireDefault(_Quiz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Connects Quiz to state.

  Separating QuizContainer from Quiz allows you to swap this QuizContainer for
  your own if you'd like, one that connects to Redux for example.
*/

var QuizContainer = function (_React$Component) {
  _inherits(QuizContainer, _React$Component);

  function QuizContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, QuizContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(QuizContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      currentQuestionIndex: 0,
      answers: {}
    }, _this.onAnswer = function (selectedAnswer) {
      _this.setState(_extends({}, _this.state, {
        answers: _extends({}, _this.state.answers, _defineProperty({}, _this.state.currentQuestionIndex, selectedAnswer)) }));
    }, _this.onNext = function () {
      return _this.setState({
        currentQuestionIndex: _this.state.currentQuestionIndex + 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuizContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Quiz2.default, { title: this.props.title,
        questions: this.props.questions,
        currentQuestionIndex: this.state.currentQuestionIndex,
        answers: this.state.answers,
        onAnswer: this.onAnswer,
        onNext: this.onNext,
        onFinished: this.props.onFinished,
        answerButtonClassName: this.props.answerButtonClassName,
        answerClassName: this.props.answerClassName,
        nextQuestionClassName: this.props.nextQuestionClassName,
        questionInstructionClassName: this.props.questionInstructionClassName,
        questionAnswerListClassName: this.props.questionAnswerListClassName,
        quizButtonContainerClassName: this.props.quizButtonContainerClassName
      });
    }
  }]);

  return QuizContainer;
}(_react2.default.Component);

QuizContainer.propTypes = {
  title: _react2.default.PropTypes.string,
  questions: _react2.default.PropTypes.array.isRequired,
  onFinished: _react2.default.PropTypes.func.isRequired,
  answerButtonClassName: _react2.default.PropTypes.string,
  nextQuestionClassName: _react2.default.PropTypes.string,
  answerClassName: _react2.default.PropTypes.string,
  questionInstructionClassName: _react2.default.PropTypes.string,
  questionAnswerListClassName: _react2.default.PropTypes.string,
  quizButtonContainerClassName: _react2.default.PropTypes.string
};

exports.default = QuizContainer;