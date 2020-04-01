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
  return (
    <div className="container my-4">
      <PricingRow>
        <TextCol DynamicTrans={DynamicTrans} />
        <StartupCol DynamicTrans={DynamicTrans} t={t} button={startupButton} />
        <ScaleupCol DynamicTrans={DynamicTrans} t={t} button={scaleupButton} highlight={highlightScaleup} />
        <EnterpriseCol DynamicTrans={DynamicTrans} t={t} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol DynamicTrans={DynamicTrans} name={STARTUP} />
        <StartupCol DynamicTrans={DynamicTrans} t={t} button={startupButton} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol DynamicTrans={DynamicTrans} name={PREMIUM} />
        <ScaleupCol DynamicTrans={DynamicTrans} t={t} button={scaleupButton} highlight={highlightScaleup} />
      </PricingRow>

      <PricingRow mobileView>
        <TextCol DynamicTrans={DynamicTrans} name={ENTERPRISE} />
        <EnterpriseCol DynamicTrans={DynamicTrans} t={t} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>
    </div>
  );
};
