// src/components/Layout.js

import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen, children }) => {
    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};

// Adding prop types for better validation and maintainability
Layout.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Layout;
