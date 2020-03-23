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
var PREMIUM = 'Premium';
var ENTERPRISE = 'Enterprise';

var LedgyPricing = exports.LedgyPricing = function LedgyPricing(_ref) {
  var startupButton = _ref.startupButton,
      scaleupButton = _ref.scaleupButton,
      enterpriseButton = _ref.enterpriseButton,
      _ref$highlightScaleup = _ref.highlightScaleup,
      highlightScaleup = _ref$highlightScaleup === undefined ? false : _ref$highlightScaleup,
      _ref$highlightEnterpr = _ref.highlightEnterprise,
      highlightEnterprise = _ref$highlightEnterpr === undefined ? false : _ref$highlightEnterpr,
      _ref$DynamicTrans = _ref.DynamicTrans,
      DynamicTrans = _ref$DynamicTrans === undefined ? function (_ref2) {
    var children = _ref2.children;
    return children;
  } : _ref$DynamicTrans,
      _ref$t = _ref.t,
      t = _ref$t === undefined ? function (text) {
    return text;
  } : _ref$t;

  var TextCol = function TextCol(_ref3) {
    var _ref3$name = _ref3.name,
        name = _ref3$name === undefined ? '' : _ref3$name;
    return _react2.default.createElement(
      _PricingComponents.PricingCol,
      { textLeft: true, name: name },
      featurePricing.map(function (_ref4, i) {
        var _ref4$text = _ref4.text,
            text = _ref4$text === undefined ? true : _ref4$text;
        return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: text, key: i, DynamicTrans: DynamicTrans });
      })
    );
  };

  var StartupCol = _react2.default.createElement(
    _PricingComponents.PricingCol,
    { icon: _startupIcon2.default, iconWidth: 80, name: STARTUP, price: t('Free'), DynamicTrans: DynamicTrans },
    featurePricing.map(function (_ref5, i) {
      var _ref5$startup = _ref5.startup,
          startup = _ref5$startup === undefined ? true : _ref5$startup;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: startup, key: i + 100, DynamicTrans: DynamicTrans });
    }),
    _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      startupButton || _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        _react2.default.createElement(
          DynamicTrans,
          null,
          'Sign up'
        )
      )
    )
  );

  var ScaleupCol = _react2.default.createElement(
    _PricingComponents.PricingCol,
    {
      highlight: highlightScaleup,
      icon: _scaleupIcon2.default,
      iconWidth: 180,
      name: PREMIUM,
      price: t('€2 / stakeholder / month')
    },
    featurePricing.map(function (_ref6, i) {
      var _ref6$scaleup = _ref6.scaleup,
          scaleup = _ref6$scaleup === undefined ? true : _ref6$scaleup;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: scaleup, key: i + 200, DynamicTrans: DynamicTrans });
    }),
    scaleupButton || _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        _react2.default.createElement(
          DynamicTrans,
          null,
          'Free trial'
        )
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
      price: t('Contact us')
    },
    featurePricing.map(function (_ref7, i) {
      var _ref7$enterprise = _ref7.enterprise,
          enterprise = _ref7$enterprise === undefined ? true : _ref7$enterprise;
      return _react2.default.createElement(_PricingComponents.PricingColChildren, { prop: enterprise, key: i + 300, DynamicTrans: DynamicTrans });
    }),
    enterpriseButton || _react2.default.createElement(
      'a',
      { href: 'https://app.ledgy.com/signup' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'my-4' },
        _react2.default.createElement(
          DynamicTrans,
          null,
          'Get a demo'
        )
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
      _react2.default.createElement(TextCol, { name: PREMIUM }),
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