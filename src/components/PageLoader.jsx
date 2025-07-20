// src/components/Loader.jsx
import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#05080F] flex items-center flex-col justify-center z-50">
      <img src="loader-svg.svg" alt="" />
      <p className='text-[#7f6ce0] text-lg text-glow'>Loading Page</p>
    </div>
  );
};

export default PageLoader;
