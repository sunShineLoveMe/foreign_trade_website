import React, { useState } from 'react';

const ImageWithLoading = ({ src, alt, className = "", ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className={`relative ${className}`} {...props}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-slate-500 text-sm">Image not available</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default ImageWithLoading;