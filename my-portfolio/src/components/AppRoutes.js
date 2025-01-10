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

const BASE_PATH = '/portfolio';

const ROUTES = [
  { path: `${BASE_PATH}/about`, component: About, tab: 'about' },
  { path: `${BASE_PATH}/projects`, component: Projects, tab: 'projects' },
  { path: `${BASE_PATH}/experience`, component: Experience, tab: 'experience' },
  { path: `${BASE_PATH}/education`, component: Education, tab: 'education' },
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
        <SuspenseBoundary>
          <Routes>
            <Route path="/" element={<Navigate to={`${BASE_PATH}/about`} />} />
            <Route path={BASE_PATH} element={<Navigate to={`${BASE_PATH}/about`} />} />
            
            {ROUTES.map(({ path, component: Component }) => (
              <Route 
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
            
            <Route path={`${BASE_PATH}/*`} element={<NotFound />} />
          </Routes>
        </SuspenseBoundary>
      </Layout>
    </>
  );
};

export default AppRoutes;