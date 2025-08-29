import React from 'react';

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <div className="relative">
        {/* Outer animated ring */}
        <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-blue-500 animate-spin" />

        {/* Inner glowing dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
      </div>
    </div>
  );
};


