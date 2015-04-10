'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React$Component = require('react');

var _React$Component2 = _interopRequireWildcard(_React$Component);

var _s = require('react-prefixr');

var _s2 = _interopRequireWildcard(_s);

var styles = { position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

var FullString = (function (_Component) {
  function FullString(props) {
    _classCallCheck(this, FullString);

    _get(Object.getPrototypeOf(FullString.prototype), 'constructor', this).call(this, props);
    this.state = { pos: -1 };
  }

  _inherits(FullString, _Component);

  _createClass(FullString, [{
    key: 'componentWillAppear',
    value: function componentWillAppear(cb) {
      setTimeout(cb, 50);
      this.setState({ pos: -1 });
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.setState({ pos: 0 });
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(cb) {
      setTimeout(cb, 50);
      this.setState({ pos: -1 });
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.setState({ pos: 0 });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(cb) {
      setTimeout(cb, (this.props.duration + this.props.delay * this.props.string.length) * 1000);
      this.setState({ pos: 1 });
    }
  }, {
    key: 'componentDidLeave',
    value: function componentDidLeave() {}
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var state = this.state;

      return _React$Component2['default'].createElement(
        'span',
        { style: styles },
        props.string.split('').map(function (char, index) {

          var charStyles = { display: char !== ' ' ? 'inline-block' : 'inline',
            transition: '' + props.duration + 's ' + props.delay * index + 's ' + props.easing,
            transform: state.pos < 0 ? props.before : state.pos > 0 ? props.after : 'translate(0, 0)',
            opacity: state.pos === 0 ? 1 : 0
          };

          return _React$Component2['default'].createElement(
            'span',
            { key: props.string + char + index, style: charStyles },
            char
          );
        })
      );
    }
  }]);

  return FullString;
})(_React$Component.Component);

FullString.propTypes = { string: _React$Component2['default'].PropTypes.string.isRequired,
  before: _React$Component2['default'].PropTypes.string.isRequired,
  after: _React$Component2['default'].PropTypes.string.isRequired,
  duration: _React$Component2['default'].PropTypes.number.isRequired,
  easing: _React$Component2['default'].PropTypes.string.isRequired,
  delay: _React$Component2['default'].PropTypes.number.isRequired
};

FullString.displayName = 'FullString';

exports['default'] = FullString;
module.exports = exports['default'];