import React from 'react';
import { render } from 'react-dom';
import { LedgyPricing, FEATURES } from '../../src';

const App = () => (
  <LedgyPricing highlightFeature={FEATURES.SUPPORT}/>
);

render(<App />, document.getElementById('root'));
