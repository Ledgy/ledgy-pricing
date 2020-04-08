import React from 'react';
import { render } from 'react-dom';
import { LedgyPricing, FEATURES } from '../../src';

const App = () => (
  <LedgyPricing highlightFeature={FEATURES.SUPPORT} scaleupText="14 days free trial" />
);

render(<App />, document.getElementById('root'));
