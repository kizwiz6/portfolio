import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, image }) => {
    // Effect to handle the Escape key for closing the modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose(); // Close modal if Escape key is pressed
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Don't render the modal if it's not open
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white p-4 rounded relative">
                {/* Updated close button for better visibility */}
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    onClick={onClose}
                >
                    X {/* Close button content */}
                </button>
                <img src={image} alt="Modal" className="max-w-full max-h-screen" />
            </div>
        </div>
    );
};

export default Modal;
