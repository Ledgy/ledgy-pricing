/* eslint-disable react/prop-types */
import React from 'react';

export const TextCell = ({ text, isHeader, DynamicTrans = ({ children }) => children }) => {
  if (isHeader) {
    return (<div className="pricing-cell-header">{text}</div>);
  }
  return (
    <div className="pricing-cell-normal">
      <DynamicTrans>{text}</DynamicTrans>
    </div>
  );
}
