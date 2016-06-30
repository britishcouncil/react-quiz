'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quiz = undefined;

var _Quiz = require('./Quiz');

Object.defineProperty(exports, 'Quiz', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Quiz).default;
  }
});

var _QuizContainer = require('./QuizContainer');

var _QuizContainer2 = _interopRequireDefault(_QuizContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _QuizContainer2.default;