import React from 'react';
import Logo from '../Logo/Logo';

const Notice = ({ notice = null }) => (
  <div className="notice-content">
    <Logo />
    <p>{notice}</p>
  </div>
);

export default Notice;
