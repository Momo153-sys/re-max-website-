'use client'
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
      // Import Bootstrap's JavaScript
      require('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
    <div style={{display: 'none'}}>
    </div>
  );
};

export default MyComponent;
