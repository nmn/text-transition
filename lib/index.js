'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React$Component = require('react');

var _React$Component2 = _interopRequireWildcard(_React$Component);

var _TransitionGroup = require('react/lib/ReactTransitionGroup');

var _TransitionGroup2 = _interopRequireWildcard(_TransitionGroup);

var _FullString = require('./FullString');

var _FullString2 = _interopRequireWildcard(_FullString);

var TextTransition = (function (_Component) {
  function TextTransition() {
    _classCallCheck(this, TextTransition);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(TextTransition, _Component);

  _createClass(TextTransition, [{
    key: 'render',
    value: function render() {
      return _React$Component2['default'].createElement(
        _TransitionGroup2['default'],
        null,
        _React$Component2['default'].createElement(_FullString2['default'], _extends({}, this.props, { key: this.props.string }))
      );
    }
  }]);

  return TextTransition;
})(_React$Component.Component);

TextTransition.propTypes = { string: _React$Component2['default'].PropTypes.string.isRequired,
  before: _React$Component2['default'].PropTypes.string.isRequired,
  after: _React$Component2['default'].PropTypes.string.isRequired,
  duration: _React$Component2['default'].PropTypes.number.isRequired,
  easing: _React$Component2['default'].PropTypes.string.isRequired,
  delay: _React$Component2['default'].PropTypes.number.isRequired
};

TextTransition.displayName = 'TextTransition';

exports['default'] = TextTransition;
module.exports = exports['default'];