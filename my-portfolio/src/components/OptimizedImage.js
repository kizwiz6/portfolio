import React, { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageOptimization';

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width = 800,
  height,
  placeholder = "/api/placeholder/400/320"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const optimizedSrc = getOptimizedImageUrl(src, width);

  return (
    <div className={`relative ${className}`}>
      {/* Blur-up placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
          }}
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ height: height || 'auto' }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        loading="lazy"
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default React.memo(OptimizedImage);