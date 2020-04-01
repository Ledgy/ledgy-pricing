/* eslint-disable react/prop-types */
import React from 'react';

export const PricingRow = ({
  children,
  mobileView = false,
  marginBottom = false,
}) => (
  <div
    className={`row text-nowrap ${mobileView ? 'mobile-pricing' : 'desktop-pricing'} ${
      marginBottom ? 'mb-4' : ''
    }`}
  >
    {children}
  </div>
);
