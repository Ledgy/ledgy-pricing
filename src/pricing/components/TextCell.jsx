/* eslint-disable react/prop-types */
import React from 'react';

export const TextCell = ({ text, isHeader, DynamicTrans = ({ children }) => children }) => {
  if (isHeader) {
    return (<div className="pricing-col-header">{text}</div>);
  }
  return (
    <div className="pricing-col-children">
      <DynamicTrans>{text}</DynamicTrans>
    </div>
  );
}
