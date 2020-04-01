import React from 'react';

import { PricingCol } from './PricingCol';
import { PricingColChildren } from './PricingColChildren';
import { featurePricing } from './lib';

export const TextCol = ({ name = '', DynamicTrans }) => (
  <PricingCol textLeft name={name}>
    {featurePricing.map(({ text = true }, i) => (
      <PricingColChildren prop={text} key={i} DynamicTrans={DynamicTrans} />
    ))}
  </PricingCol>
);