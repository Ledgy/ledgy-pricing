/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import startupIcon from '../images/startup-icon.png';
import scaleupIcon from '../images/scaleup-icon.png';
import enterpriseIcon from '../images/enterprise-icon.png';

import { TextCol, PricingCol, PricingColChildren, PricingRow } from './components';
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
  const StartupCol = (
    <PricingCol icon={startupIcon} iconWidth={80} name={STARTUP} price={t('Free')} DynamicTrans={DynamicTrans}>
      {featurePricing.map(({ startup = true }, i) => (
        <PricingColChildren prop={startup} key={i + 100} DynamicTrans={DynamicTrans} />
      ))}
      <a href="https://app.ledgy.com/signup">
        {startupButton
        || (
        <button type="button" className="my-4">
          <DynamicTrans>Sign up</DynamicTrans>
        </button>
        )}
      </a>
    </PricingCol>
  );

  const ScaleupCol = (
    <PricingCol
      highlight={highlightScaleup}
      icon={scaleupIcon}
      iconWidth={180}
      name={PREMIUM}
      price={t('€2 / stakeholder / month')}
    >
      {featurePricing.map(({ scaleup = true }, i) => (
        <PricingColChildren prop={scaleup} key={i + 200} DynamicTrans={DynamicTrans} />
      ))}
      {scaleupButton
      || (
      <a href="https://app.ledgy.com/signup">
        <button type="button" className="my-4">
          <DynamicTrans>Free trial</DynamicTrans>
        </button>
      </a>
      )}
    </PricingCol>
  );

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
        {StartupCol}
        {ScaleupCol}
        {EnterpriseCol}
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol DynamicTrans={DynamicTrans} name={STARTUP} />
        {StartupCol}
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol DynamicTrans={DynamicTrans} name={PREMIUM} />
        {ScaleupCol}
      </PricingRow>

      <PricingRow mobileView>
        <TextCol DynamicTrans={DynamicTrans} name={ENTERPRISE} />
        {EnterpriseCol}
      </PricingRow>
    </div>
  );
};
