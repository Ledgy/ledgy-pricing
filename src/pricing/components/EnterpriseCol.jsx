import React from 'react';

import { DefaultButton } from './DefaultButton';
import { PricingCol } from './PricingCol';
import { PricingColChildren } from './PricingColChildren';
import { featurePricing } from './lib';

import { ENTERPRISE } from '../lib';
import enterpriseIcon from '../../images/enterprise-icon.png';

export const EnterpriseCol = ({ button, highlight, DynamicTrans, t }) => (
  <PricingCol
    highlight={highlight}
    icon={enterpriseIcon}
    iconWidth={180}
    name={ENTERPRISE}
    price={t('Contact us')}
  >
    {featurePricing.map(({ enterprise = true }, i) => (
      <PricingColChildren prop={enterprise} key={i + 300} DynamicTrans={DynamicTrans} />
    ))}
    {button || <DefaultButton DynamicTrans={DynamicTrans} text="Get a demo" />}
  </PricingCol>
);
