import React from 'react';
import { render } from 'react-dom';
import { LedgyPricing, FEATURES } from '../../src';

const App = () => (
  <LedgyPricing highlightFeature={FEATURES.ADMIN_SEATS}/>
);

render(<App />, document.getElementById('root'));
