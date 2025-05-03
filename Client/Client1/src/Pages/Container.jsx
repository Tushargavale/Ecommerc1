import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-7xl min-h-screen max-h-full flex-grow w-full flex-1 overflow-auto mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;