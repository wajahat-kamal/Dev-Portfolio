// src/components/Loader.jsx
import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#05080F] flex items-center justify-center z-50">
      <img src="loader-svg.svg" alt="" />
    </div>
  );
};

export default PageLoader;
