'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LedgyPricing = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

var _startupIcon = require('./images/startup-icon.png');

var _startupIcon2 = _interopRequireDefault(_startupIcon);

var _scaleupIcon = require('./images/scaleup-icon.png');

var _scaleupIcon2 = _interopRequireDefault(_scaleupIcon);

var _enterpriseIcon = require('./images/enterprise-icon.png');

var _enterpriseIcon2 = _interopRequireDefault(_enterpriseIcon);

var _pricingText = require('./pricing-text');

var _PricingComponents = require('./PricingComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var featurePricing = (0, _pricingText.getCompanyFeaturePricing)(); /* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

var STARTUP = 'Startup';
var SCALEUP = 'Scaleup';
var ENTERPRISE = 'Enterprise';

var LedgyPricing = exports.LedgyPricing = function LedgyPricing(_ref) {
  var startupButton = _ref.startupButton,
      scaleupButton = _ref.scaleupButton,
      enterpriseButton = _ref.enterpriseButton,
      _ref$highlightScaleup = _ref.highlightScaleup,
      highlightScaleup = _ref$highlightScaleup === undefined ? false : _ref$highlightScaleup,
      _ref$highlightEnterpr = _ref.highlightEnterprise,
      highlightEnterprise = _ref$highlightEnterpr === undefined ? false : _ref$highlightEnterpr;

  var TextCol = function TextCol(_ref2) {
    var _ref2$name = _ref2.name,
        name = _ref2$name === undefined ? '' : _ref2$name;
    return _react2.default.createElement(
      _PricingComponents.PricingCol,
      { textLeft: true, name: name },
      featurePricing.map(function (_ref3, i) {
        var _ref3$text = _ref3.text,
            text = _ref3$text === undefined ? true : _ref3$text;
        return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: text, key: i });
      })
    );
  };

  var StartupCol = _react2.default.createElement(
    _PricingComponents.PricingCol,
    { icon: _startupIcon2.default, iconWidth: 80, name: STARTUP, price: 'Free' },
    featurePricing.map(function (_ref4, i) {
      var _ref4$startup = _ref4.startup,
          startup = _ref4$startup === undefined ? true : _ref4$startup;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: startup, key: i + 100 });
    }),
    _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      startupButton || _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        'Sign up'
      )
    )
  );

  var ScaleupCol = _react2.default.createElement(
    _PricingComponents.PricingCol,
    {
      highlight: highlightScaleup,
      icon: _scaleupIcon2.default,
      iconWidth: 180,
      name: SCALEUP,
      price: '\u20AC2 / stakeholder / month'
    },
    featurePricing.map(function (_ref5, i) {
      var _ref5$scaleup = _ref5.scaleup,
          scaleup = _ref5$scaleup === undefined ? true : _ref5$scaleup;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: scaleup, key: i + 200 });
    }),
    scaleupButton || _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        'Free trial'
      )
    )
  );

  var EnterpriseCol = _react2.default.createElement(
    _PricingComponents.PricingCol,
    {
      highlight: highlightEnterprise,
      icon: _enterpriseIcon2.default,
      iconWidth: 180,
      name: ENTERPRISE,
      price: 'contact us'
    },
    featurePricing.map(function (_ref6, i) {
      var _ref6$enterprise = _ref6.enterprise,
          enterprise = _ref6$enterprise === undefined ? true : _ref6$enterprise;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: enterprise, key: i + 300 });
    }),
    enterpriseButton || _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        'Get a demo'
      )
    )
  );
  return _react2.default.createElement(
    'div',
    { className: 'container my-4' },
    _react2.default.createElement(
      _PricingComponents.PricingRow,
      null,
      _react2.default.createElement(TextCol, null),
      StartupCol,
      ScaleupCol,
      EnterpriseCol
    ),
    _react2.default.createElement(
      _PricingComponents.PricingRow,
      { mobileView: true, marginBottom: true },
      _react2.default.createElement(TextCol, { name: STARTUP }),
      StartupCol
    ),
    _react2.default.createElement(
      _PricingComponents.PricingRow,
      { mobileView: true, marginBottom: true },
      _react2.default.createElement(TextCol, { name: SCALEUP }),
      ScaleupCol
    ),
    _react2.default.createElement(
      _PricingComponents.PricingRow,
      { mobileView: true },
      _react2.default.createElement(TextCol, { name: ENTERPRISE }),
      EnterpriseCol
    )
  );
};