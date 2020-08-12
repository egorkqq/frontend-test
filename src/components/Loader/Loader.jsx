import React from 'react';
import { Spin } from 'antd';
import './Loader.sass';

const Loader = () => {
  return (
    <div className="Loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
