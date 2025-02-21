// src/components/AppRoutes.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Layout from './Layout';
import LoadingSpinner from './LoadingSpinner';

// Lazy loading helper
const lazyWithPreload = (factory) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
};

// Lazy load pages with preload capability
const About = lazyWithPreload(() => import('../pages/About'));
const Projects = lazyWithPreload(() => import('../pages/Projects'));
const Experience = lazyWithPreload(() => import('../pages/Experience'));
const Education = lazyWithPreload(() => import('../pages/Education'));
const NotFound = lazyWithPreload(() => import('../pages/NotFound'));

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

  // Preload handler for navigation
  const handleNavHover = (path) => {
    const route = ROUTES.find(r => r.path === path);
    if (route && route.component.preload) {
      route.component.preload();
    }
  };

  return (
    <>
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavHover={handleNavHover}
      />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />

            {ROUTES.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Component
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                }
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