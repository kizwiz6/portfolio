// src/components/AppRoutes.js

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Portfolio from '../pages/Portfolio'; // Import your Portfolio page
import Layout from './Layout';
import Navigation from './Navigation';
import NotFound from '../pages/NotFound';

const AppRoutes = ({ isMenuOpen, setIsMenuOpen }) => {
    const [activeTab, setActiveTab] = useState('about');
    const location = useLocation();

    // Update activeTab based on the current path
    useEffect(() => {
        const pathToTabMap = {
            '/portfolio/about': 'about',
            '/portfolio/projects': 'projects',
            '/portfolio/experience': 'experience',
            '/portfolio/education': 'education',
        };
        setActiveTab(pathToTabMap[location.pathname] || 'about');
    }, [location.pathname]);

    return (
        <>
            <Navigation 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/portfolio/about" />} />
                    <Route path="/portfolio" element={<Navigate to="/portfolio/about" />} />
                    <Route path="/portfolio/about" element={<About />} />
                    <Route path="/portfolio/projects" element={<Projects />} />
                    <Route path="/portfolio/experience" element={<Experience />} />
                    <Route path="/portfolio/education" element={<Education />} />
                    <Route path="/portfolio/*" element={<NotFound />} /> {/* Catch-all for unknown routes */}
                </Routes>
            </Layout>
        </>
    );
};

export default AppRoutes;
