/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { EnterpriseCol, StartupCol, ScaleupCol, TextCol, PricingRow } from './components';
import { STARTUP, PREMIUM, ENTERPRISE } from './lib';
import { featurePricing } from './components/lib';

export const LedgyPricing = ({
  startupButton,
  scaleupButton,
  enterpriseButton,
  highlightScaleup = false,
  highlightEnterprise = false,
  DynamicTrans = ({ children }) => children,
  t = (text) => text,
}) => {
  const trans = { DynamicTrans, t };
  return (
    <div className="container my-4">
      <PricingRow>
        <TextCol {...trans} />
        <StartupCol {...trans} button={startupButton} />
        <ScaleupCol {...trans} button={scaleupButton} highlight={highlightScaleup} />
        <EnterpriseCol {...trans} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol {...trans} name={STARTUP} />
        <StartupCol {...trans} button={startupButton} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol {...trans} name={PREMIUM} />
        <ScaleupCol {...trans} button={scaleupButton} highlight={highlightScaleup} />
      </PricingRow>

      <PricingRow mobileView>
        <TextCol {...trans} name={ENTERPRISE} />
        <EnterpriseCol {...trans} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>
    </div>
  );
};
