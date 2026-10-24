// src/components/Layout.js

import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return <div className="page-shell">{children}</div>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;