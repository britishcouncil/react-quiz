'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Answer = function Answer(_ref) {
  var active = _ref.active;
  var onClick = _ref.onClick;
  var children = _ref.children;
  var answerButtonClassName = _ref.answerButtonClassName;
  var answerClassName = _ref.answerClassName;
  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)('rq-Answer', answerClassName) },
    _react2.default.createElement(
      'button',
      { onClick: onClick,
        className: (0, _classnames2.default)('rq-Answer-button', answerButtonClassName, { 'rq-Answer-button--active': active }) },
      children
    )
  );
};

Answer.propTypes = {
  active: _react2.default.PropTypes.bool.isRequired,
  onClick: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node.isRequired,
  answerButtonClassName: _react2.default.PropTypes.string,
  answerClassName: _react2.default.PropTypes.string
};

exports.default = Answer;