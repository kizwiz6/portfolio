// src/components/Layout.js

import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;