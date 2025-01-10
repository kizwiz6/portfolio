import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import LoadingSpinner from './LoadingSpinner';
import SuspenseBoundary from './SuspenseBoundary';

const ImageGallery = ({ images, title }) => {
  const [lightbox, setLightbox] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setCurrentImageIndex(0);
  }, []);

  const goToNextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((event) => {
    if (lightbox) {
      switch (event.key) {
        case 'ArrowRight':
          goToNextImage(event);
          break;
        case 'ArrowLeft':
          goToPrevImage(event);
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    }
  }, [lightbox, goToNextImage, goToPrevImage, closeLightbox]);

  useEffect(() => {
    if (lightbox) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightbox, handleKeyDown]);

  // Update the lightbox image when currentImageIndex changes
  useEffect(() => {
    if (lightbox) {
      setLightbox(images[currentImageIndex]);
    }
  }, [currentImageIndex, images, lightbox]);

  return (
    <div>
      <h4 className="font-medium mb-2">{title} Gallery:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SuspenseBoundary fallback={<LoadingSpinner size="medium" />}>
          {images.map((image, index) => (
            <div key={image} className="aspect-w-16 aspect-h-9 cursor-pointer">
              <OptimizedImage
                src={image}
                alt={`${title} image ${index + 1}`}
                className="rounded-lg shadow-md w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
                onClick={() => {
                  setLightbox(image);
                  setCurrentImageIndex(index);
                }}
              />
            </div>
          ))}
        </SuspenseBoundary>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main lightbox image */}
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              src={lightbox}
              alt={`${title} (enlarged view)`}
              className="rounded-lg shadow-xl max-w-full max-h-[90vh] object-contain"
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
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

export default React.memo(ImageGallery);