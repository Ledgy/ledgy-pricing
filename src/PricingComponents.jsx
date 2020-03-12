/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prop-types */
import React from 'react';

// import check from './images/check.svg';
// import times from './images/times.svg';

const Check = <svg width={16} height={16} fill="#1edeb7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>;
const Times = <svg width={16} height={16} fill="#6c757d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>;

export const PricingCol = ({
  icon,
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
      className={`pricing-plan ${name} p-1 d-flex flex-column justify-content-end align-items-center`}
    >
      {icon && name && price && (
        <React.Fragment>
          <img src={icon} width={100} alt="" />
          <h3 className="py-2 mt-1">{name}</h3>
          <div className="text-wrap">{price}</div>
        </React.Fragment>
      )}
    </div>
    {children}
  </div>
);

export const PricingColChildren = ({ prop }) => (
  <div className="d-block p-1 pricing-col-children">
    {(typeof prop !== 'boolean' && prop) || (!prop && Times) || (Check)}
  </div>
);

export const PricingRow = ({
  children,
  mobileView = false,
  marginBottom = false,
}) => (
  <div
    className={`row text-nowrap ${mobileView ? 'd-flex d-lg-none' : 'd-none d-lg-flex'} ${
      marginBottom ? 'mb-4' : ''
    }`}
  >
    {children}
  </div>
);
