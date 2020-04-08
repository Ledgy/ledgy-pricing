/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  EnterpriseCol, StartupCol, ScaleupCol, TextCol, PricingRow,
} from './components';
import { STARTUP, PREMIUM, ENTERPRISE } from './lib';

export const LedgyPricing = ({
  startupButton,
  scaleupButton,
  scaleupText = '',
  enterpriseButton,
  highlightScaleup = false,
  highlightEnterprise = false,
  highlightFeature = '',
  DynamicTrans = ({ children }) => children,
  t = (text) => text,
}) => {
  const baseProps = { highlightFeature, DynamicTrans, t };
  return (
    <div className="container my-4">
      <PricingRow>
        <TextCol {...baseProps} />
        <StartupCol {...baseProps} button={startupButton} />
        <ScaleupCol {...baseProps} button={scaleupButton} highlight={highlightScaleup} text={scaleupText} />
        <EnterpriseCol {...baseProps} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol {...baseProps} name={STARTUP} />
        <StartupCol {...baseProps} button={startupButton} />
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol {...baseProps} name={PREMIUM} />
        <ScaleupCol {...baseProps} button={scaleupButton} highlight={highlightScaleup} text={scaleupText} />
      </PricingRow>

      <PricingRow mobileView>
        <TextCol {...baseProps} name={ENTERPRISE} />
        <EnterpriseCol {...baseProps} button={enterpriseButton} highlight={highlightEnterprise} />
      </PricingRow>
    </div>
  );
};
