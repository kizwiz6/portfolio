// src/config/routes.js
import { lazy } from 'react';

// Lazy loaded components with retry mechanism
const withRetry = (lazyComponent) => {
  return new Promise((resolve, reject) => {
    const retryImport = () => {
      lazyComponent()
        .then(resolve)
        .catch((error) => {
          console.error('Error loading component:', error);
          // Retry after 1.5 seconds
          setTimeout(retryImport, 1500);
        });
    };
    retryImport();
  });
};

export const routes = [
  {
    path: '/portfolio/about',
    component: lazy(() => withRetry(() => import('../pages/About'))),
    tab: 'about'
  },
  {
    path: '/portfolio/projects',
    component: lazy(() => withRetry(() => import('../pages/Projects'))),
    tab: 'projects'
  },
  {
    path: '/portfolio/experience',
    component: lazy(() => withRetry(() => import('../pages/Experience'))),
    tab: 'experience'
  },
  {
    path: '/portfolio/education',
    component: lazy(() => withRetry(() => import('../pages/Education'))),
    tab: 'education'
  }
];

// Preload critical routes
export const preloadRoute = (path) => {
  const route = routes.find(r => r.path === path);
  if (route) {
    const component = route.component;
    // @ts-ignore
    component.preload?.();
  }
};

// Helper to preload all routes
export const preloadAllRoutes = () => {
  routes.forEach(route => {
    const component = route.component;
    // @ts-ignore
    component.preload?.();
  });
};