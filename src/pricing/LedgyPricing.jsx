/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import enterpriseIcon from '../images/enterprise-icon.png';

import { StartupCol, ScaleupCol, TextCol, PricingCol, PricingColChildren, PricingRow } from './components';
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
  const EnterpriseCol = (
    <PricingCol
      highlight={highlightEnterprise}
      icon={enterpriseIcon}
      iconWidth={180}
      name={ENTERPRISE}
      price={t('Contact us')}
    >
      {featurePricing.map(({ enterprise = true }, i) => (
        <PricingColChildren prop={enterprise} key={i + 300} DynamicTrans={DynamicTrans} />
      ))}
      {enterpriseButton
      || (
      <a href="https://app.ledgy.com/signup">
        <button type="button" className="my-4">
          <DynamicTrans>Get a demo</DynamicTrans>
        </button>
      </a>
      )}
    </PricingCol>
  );
  return (
    <div className="container my-4">
      <PricingRow>
        <TextCol DynamicTrans={DynamicTrans} />
        <StartupCol DynamicTrans={DynamicTrans} t={t} button={startupButton} />
        <ScaleupCol DynamicTrans={DynamicTrans} t={t} button={scaleupButton} highlight={highlightScaleup} />
        {EnterpriseCol}
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
        {EnterpriseCol}
      </PricingRow>
    </div>
  );
};
