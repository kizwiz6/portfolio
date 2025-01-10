import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { preloadAllRoutes } from './config/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Preload routes in the background
preloadAllRoutes();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals(console.log);