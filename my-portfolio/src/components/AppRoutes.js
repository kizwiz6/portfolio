// src/components/AppRoutes.js
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
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
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience },
  { path: '/education', component: Education },
];

const AppRoutes = ({ isMenuOpen, setIsMenuOpen }) => {
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
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavHover={handleNavHover}
      />
      <main id="main-content" className="site-main">
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
      </main>
    </>
  );
};

export default AppRoutes;