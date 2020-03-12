/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import { TheComp } from '../../src';

const App = () => (
  <TheComp />
);

render(<App />, document.getElementById('root'));
