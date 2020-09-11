import React from 'react';
import './Tooltip.scss';

const Tooltip = ({ content }) => (
  <div className="tooltip">
    {content}
  </div>
);

export default Tooltip;
