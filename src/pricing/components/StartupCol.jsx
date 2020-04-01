import React from 'react';

import { DefaultButton } from './DefaultButton';
import { PricingCol } from './PricingCol';
import { PricingColChildren } from './PricingColChildren';
import { featurePricing } from './lib';

import { STARTUP } from '../lib';
import startupIcon from '../../images/startup-icon.png';

export const StartupCol = ({ button, DynamicTrans, t }) => (
  <PricingCol icon={startupIcon} iconWidth={80} name={STARTUP} price={t('Free')} DynamicTrans={DynamicTrans}>
    {featurePricing.map(({ startup = true }, i) => (
      <PricingColChildren prop={startup} key={i + 100} DynamicTrans={DynamicTrans} />
    ))}
    {button || <DefaultButton DynamicTrans={DynamicTrans} text="Sign up" />}
  </PricingCol>
);
