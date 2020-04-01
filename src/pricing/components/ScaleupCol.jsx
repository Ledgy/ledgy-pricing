import React from 'react';

import { PricingCol } from './PricingCol';
import { PricingColChildren } from './PricingColChildren';
import { featurePricing } from './lib';

import { PREMIUM } from '../lib';
import scaleupIcon from '../../images/scaleup-icon.png';

export const ScaleupCol = ({ button, highlight, DynamicTrans, t }) => (
  <PricingCol
    highlight={highlight}
    icon={scaleupIcon}
    iconWidth={180}
    name={PREMIUM}
    price={t('€2 / stakeholder / month')}
  >
    {featurePricing.map(({ scaleup = true }, i) => (
      <PricingColChildren prop={scaleup} key={i + 200} DynamicTrans={DynamicTrans} />
    ))}
    {button
    || (
    <a href="https://app.ledgy.com/signup">
      <button type="button" className="my-4">
        <DynamicTrans>Free trial</DynamicTrans>
      </button>
    </a>
    )}
  </PricingCol>
);
