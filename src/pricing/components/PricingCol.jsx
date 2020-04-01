/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
import React from 'react';

export const PricingCol = ({
  icon,
  iconWidth,
  name = '',
  price,
  children,
  textLeft = false,
  highlight = false,
}) => (
  <div
    className={`pricing-col ${textLeft ? 'text-left' : 'text-center'} ${
      highlight ? 'border-energetic-blue' : ''
    }`}
  >
    <div
      className={`pricing-plan ${name}`}
    >
      {icon && name && price && (
        <React.Fragment>
          <img src={icon} width={iconWidth} alt="" />
          <h3 className="pricing-plan-name">{name}</h3>
          <div className="text-wrap">{price}</div>
        </React.Fragment>
      )}
    </div>
    {children}
  </div>
);
