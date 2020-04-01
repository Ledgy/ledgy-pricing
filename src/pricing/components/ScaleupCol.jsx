import React from 'react';

import { DefaultButton } from './DefaultButton';
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
    {button || <DefaultButton DynamicTrans={DynamicTrans} text="Free trial" />}
  </PricingCol>
);
