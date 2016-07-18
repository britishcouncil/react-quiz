'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Answer = function Answer(_ref) {
  var active = _ref.active;
  var onClick = _ref.onClick;
  var children = _ref.children;
  var _ref$customClassNames = _ref.customClassNames;
  var customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;
  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)('rq-Answer', customClassNames['rq-Answer']) },
    _react2.default.createElement(
      'button',
      { onClick: onClick,
        className: (0, _classnames2.default)('rq-Answer-button', customClassNames['rq-Answer-button'], _defineProperty({ 'rq-Answer-button--active': active
        }, customClassNames['rq-Answer-button--active'], active)) },
      children
    )
  );
};

Answer.propTypes = {
  active: _react2.default.PropTypes.bool.isRequired,
  onClick: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = Answer;