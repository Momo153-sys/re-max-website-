'use client'
import React, { useEffect } from 'react';
import Script from 'next/script';

const MyComponent = () => {
  useEffect(() => {
      // Import Bootstrap's JavaScript
      import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
    <div style={{display: 'none'}}>
    </div>
  );
};

export default MyComponent;