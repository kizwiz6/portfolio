// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => {
    return (
        <Layout activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-500 mb-8">
                    Sorry, the page you are looking for does not exist.
                    It might have been removed, or the URL could be incorrect.
                </p>
                <Link to="/" className="text-blue-600 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;
