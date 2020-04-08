/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import { DefaultButton } from './DefaultButton';
import { PricingCol } from './PricingCol';
import { PricingCell } from './PricingCell';
import { featurePricing } from './lib';

import { PREMIUM } from '../lib';
import scaleupIcon from '../../images/scaleup-icon.png';

export const ScaleupCol = ({
  button, highlight, text, DynamicTrans, t,
}) => (
  <PricingCol
    highlight={highlight}
    icon={scaleupIcon}
    iconWidth={180}
    name={PREMIUM}
    price={t('€2 / stakeholder / month')}
  >
    {featurePricing.map(({ featureGroup = false, scaleup = true }, i) => (
      <PricingCell isEmpty={featureGroup} prop={scaleup} key={i + 200} DynamicTrans={DynamicTrans} />
    ))}
    {button || <DefaultButton DynamicTrans={DynamicTrans} text="Sign up" />}
    {text && <PricingCell className="mb-4" prop={text} />}
  </PricingCol>
);
