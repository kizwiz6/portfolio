// src/components/AppRoutes.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Layout from './Layout';
import LoadingSpinner from './LoadingSpinner';

// Lazy load pages
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Experience = lazy(() => import('../pages/Experience'));
const Education = lazy(() => import('../pages/Education'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Route configuration
const ROUTES = [
  { path: '/about', component: About, tab: 'about' },
  { path: '/projects', component: Projects, tab: 'projects' },
  { path: '/experience', component: Experience, tab: 'experience' },
  { path: '/education', component: Education, tab: 'education' },
];


const AppRoutes = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeTab, setActiveTab] = useState('about');
  const location = useLocation();

  useEffect(() => {
    const currentRoute = ROUTES.find(route => route.path === location.pathname);
    if (currentRoute) {
      setActiveTab(currentRoute.tab);
    }
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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />

            {ROUTES.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default AppRoutes;