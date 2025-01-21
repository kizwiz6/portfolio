import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = "large" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <div className="flex justify-center items-center w-full h-full min-h-[200px]">
      <Loader2 
        className={`animate-spin text-blue-600 ${sizeClasses[size]}`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;