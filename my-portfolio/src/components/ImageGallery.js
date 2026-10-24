// components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, title }) => {
  const [lightbox, setLightbox] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track the current image index
  const [isLoading, setIsLoading] = useState(true); // Track image loading state

  const closeLightbox = () => {
    setLightbox(null);
    setCurrentImageIndex(0); // Reset the index when closing
  };

  useEffect(() => {
    if (!lightbox) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentImageIndex((previousIndex) => (previousIndex + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentImageIndex((previousIndex) => (previousIndex - 1 + images.length) % images.length);
      } else if (event.key === 'Escape') {
        setLightbox(null);
        setCurrentImageIndex(0);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, lightbox]);

  // Update the lightbox to show the current image
  useEffect(() => {
    if (lightbox && currentImageIndex !== null) {
      setLightbox(images[currentImageIndex]);
    }
  }, [currentImageIndex, images, lightbox]);

  return (
    <div>
      <h4 className="font-medium mb-2">{title} Gallery:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={image} className="cursor-pointer">
            <img
              src={image}
              alt={`${title}, gallery item ${index + 1}`}
              className="rounded-lg shadow-md w-full h-40 object-cover"
              onClick={() => {
                setLightbox(image);
                setCurrentImageIndex(index); // Set the current index when opening the lightbox
              }}
              onLoad={() => setIsLoading(false)} // Set loading state to false when image loads
              onError={() => setIsLoading(false)} // Ensure loading state is reset on error
            />
            {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75"><span>Loading...</span></div>}
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt={`Enlarged view of ${title}`} // Dynamic alt text
            className="rounded-lg shadow-lg max-w-full max-h-full"
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer" 
               onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>
            &#9664; {/* Left Arrow */}
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl cursor-pointer" 
               onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>
            &#9654; {/* Right Arrow */}
          </div>
        </div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageGallery;
