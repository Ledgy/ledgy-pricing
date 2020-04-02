/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import { DefaultButton } from './DefaultButton';
import { PricingCol } from './PricingCol';
import { PricingCell } from './PricingCell';
import { featurePricing } from './lib';

import { STARTUP } from '../lib';
import startupIcon from '../../images/startup-icon.png';

export const StartupCol = ({ button, DynamicTrans, t }) => (
  <PricingCol icon={startupIcon} iconWidth={80} name={STARTUP} price={t('Free')} DynamicTrans={DynamicTrans}>
    {featurePricing.map(({ featureGroup, startup = true }, i) => (
      <PricingCell isEmpty={featureGroup} prop={startup} key={i + 100} DynamicTrans={DynamicTrans} />
    ))}
    {button || <DefaultButton DynamicTrans={DynamicTrans} text="Sign up" />}
  </PricingCol>
);
