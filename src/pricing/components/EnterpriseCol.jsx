import React from 'react';

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
    {button
    || (
    <a href="https://app.ledgy.com/signup">
      <button type="button" className="my-4">
        <DynamicTrans>Get a demo</DynamicTrans>
      </button>
    </a>
    )}
  </PricingCol>
);
