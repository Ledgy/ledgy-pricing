/* eslint-disable react/prop-types */
import React from 'react';

export const DefaultButton = ({ DynamicTrans, text }) => (
  <a href="https://app.ledgy.com/signup">
    <button type="button" className="my-4">
      <DynamicTrans>{text}</DynamicTrans>
    </button>
  </a>
);
