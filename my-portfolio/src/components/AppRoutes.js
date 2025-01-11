// src/components/AppRoutes.js
import React, { useState, useEffect, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Layout from './Layout';
import SuspenseBoundary from './SuspenseBoundary';

// Lazy load pages
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Experience = lazy(() => import('../pages/Experience'));
const Education = lazy(() => import('../pages/Education'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeTab, setActiveTab] = useState('about');
  const location = useLocation();

  const routes = [
    { path: '/about', component: About, tab: 'about' },
    { path: '/projects', component: Projects, tab: 'projects' },
    { path: '/experience', component: Experience, tab: 'experience' },
    { path: '/education', component: Education, tab: 'education' },
  ];

  useEffect(() => {
    const pathname = location.pathname;
    const currentRoute = routes.find(route => pathname.includes(route.path));
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
      <Layout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      >
        <SuspenseBoundary>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            
            {routes.map(({ path, component: Component }) => (
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
            
            <Route 
              path="*" 
              element={
                <div className="min-h-screen">
                  <NotFound />
                </div>
              } 
            />
          </Routes>
        </SuspenseBoundary>
      </Layout>
    </>
  );
};

export default AppRoutes;