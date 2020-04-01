/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import { PricingCol } from './PricingCol';
import { TextCell } from './TextCell';
import { featurePricing } from './lib';

export const TextCol = ({ name = '', DynamicTrans }) => (
  <PricingCol textLeft name={name}>
    {featurePricing.map(({ featureGroup = false, text = true }, i) => (
      <TextCell text={text} isHeader={featureGroup} key={i} DynamicTrans={DynamicTrans} />
    ))}
  </PricingCol>
);
