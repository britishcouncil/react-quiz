'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var _ref$min = _ref.min;
  var min = _ref$min === undefined ? 0 : _ref$min;
  var _ref$max = _ref.max;
  var max = _ref$max === undefined ? 100 : _ref$max;
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? 0 : _ref$value;
  var _ref$customClassNames = _ref.customClassNames;
  var customClassNames = _ref$customClassNames === undefined ? {} : _ref$customClassNames;

  var progressSize = {
    width: (value - min) / (max - min) * 100 + '%'
  };

  // Displays the progress bar size accordingly max, min, current value and isVisible
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('rq-ProgressBar', customClassNames['rq-ProgressBar']) },
    _react2.default.createElement('div', { className: (0, _classnames2.default)('rq-ProgressBar-inner', customClassNames['rq-ProgressBar-inner']), role: 'progressbar',
      'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max,
      style: progressSize })
  );
};

ProgressBar.propTypes = {
  min: _react2.default.PropTypes.number,
  max: _react2.default.PropTypes.number,
  value: _react2.default.PropTypes.number
};

exports.default = ProgressBar;