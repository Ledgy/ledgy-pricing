'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TheComp = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheComp = exports.TheComp = function TheComp() {
    return _react2.default.createElement(
        'h1',
        null,
        'Hello from My Component'
    );
};