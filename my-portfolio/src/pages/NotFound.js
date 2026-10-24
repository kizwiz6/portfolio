// src/pages/NotFound.js

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="not-found-page">
                <p className="eyebrow">404 / Wrong turn</p>
                <h2>This page wandered off.</h2>
                <p className="page-lede">That address does not lead to a portfolio page. Head back and choose another route.</p>
                <Link to="/about" className="project-action"><ArrowLeft size={16} aria-hidden="true" /> Back to the portfolio</Link>
            </div>
        </Layout>
    );
};

export default NotFound;
