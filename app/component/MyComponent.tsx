'use client'
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.min.js');
    }
  }, []);
  return (
    <div style={{display: 'none'}}>
    </div>
  );
};

export default MyComponent;