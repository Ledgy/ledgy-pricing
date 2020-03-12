/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles.scss';
import startupIcon from './images/startup-icon.png';
import { getCompanyFeaturePricing } from './pricing-text';

import { PricingCol, PricingColChildren, PricingRow } from './PricingComponents';

const featurePricing = getCompanyFeaturePricing();
const STARTUP = 'Startup';
const SCALEUP = 'Scaleup';
const ENTERPRISE = 'Enterprise';

export const TheComp = () => {
  const TextCol = ({ name = '' }) => (
    <PricingCol textLeft name={name}>
      {featurePricing.map(({ text = true }, i) => (
        <PricingColChildren prop={text} key={i} />
      ))}
    </PricingCol>
  );

  const StartupCol = (
    <PricingCol icon={startupIcon} name={STARTUP} price="Free">
      {featurePricing.map(({ startup = true }, i) => (
        <PricingColChildren prop={startup} key={i + 100} />
      ))}
      <a href="https://app.ledgy.com/signup">
        <button type="button" className="my-4">
          Sign up
        </button>
      </a>
    </PricingCol>
  );

  const ScaleupCol = (
    <PricingCol
      icon={startupIcon}
      name={SCALEUP}
      price="€2 / stakeholder / month"
    >
      {featurePricing.map(({ scaleup = true }, i) => (
        <PricingColChildren prop={scaleup} key={i + 200} />
      ))}
      <a href="https://app.ledgy.com/signup">
        <button type="button" className="my-4">
          Free trial
        </button>
      </a>
    </PricingCol>
  );

  const EnterpriseCol = (
    <PricingCol
      highlight
      icon={startupIcon}
      name={ENTERPRISE}
      price="contact us"
    >
      {featurePricing.map(({ enterprise = true }, i) => (
        <PricingColChildren prop={enterprise} key={i + 300} />
      ))}
      <a href="https://app.ledgy.com/signup">
        <button type="button" className="my-4">
          Contact
        </button>
      </a>
    </PricingCol>
  );
  return (
    <div className="container my-4">
      <PricingRow>
        <TextCol />
        {StartupCol}
        {ScaleupCol}
        {EnterpriseCol}
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol name={STARTUP} />
        {StartupCol}
      </PricingRow>

      <PricingRow mobileView marginBottom>
        <TextCol name={SCALEUP} />
        {ScaleupCol}
      </PricingRow>

      <PricingRow mobileView>
        <TextCol name={ENTERPRISE} />
        {EnterpriseCol}
      </PricingRow>
    </div>
  );
};
