/* eslint-disable react/prop-types */
import React from 'react';

export const TextCell = ({ text, isHeader = false, highlight = false, DynamicTrans = ({ children }) => children }) => {
  const classes = highlight ? 'pricing-cell-highlight' : '';
  if (isHeader) {
    return (<div className={`pricing-cell-header ${classes}`}>{text}</div>);
  }
  return (
    <div className={`pricing-cell-normal ${classes}`}>
      <DynamicTrans>{text}</DynamicTrans>
    </div>
  );
}
