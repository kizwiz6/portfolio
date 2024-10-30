// src/components/AppRoutes.js

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Layout from './Layout';
import Navigation from './Navigation';

const AppRoutes = ({ isMenuOpen, setIsMenuOpen }) => {
    const [activeTab, setActiveTab] = useState('about');
    const location = useLocation();

    // Update activeTab based on the current path
    useEffect(() => {
        const pathToTabMap = {
            '/about': 'about',
            '/projects': 'projects',
            '/experience': 'experience',
            '/education': 'education',
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
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                </Routes>
            </Layout>
        </>
    );
};

export default AppRoutes;
