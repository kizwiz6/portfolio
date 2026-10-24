// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';

const NAV_ITEMS = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
];

const Navigation = ({ isMenuOpen, setIsMenuOpen, onNavHover }) => {
    const closeMenu = () => setIsMenuOpen(false);
    const renderLinks = (className) => NAV_ITEMS.map(({ label, path }) => (
        <NavLink
            key={path}
            to={path}
            end
            onClick={closeMenu}
            onMouseEnter={() => onNavHover(path)}
            className={({ isActive }) => `${className}${isActive ? ' is-active' : ''}`}
        >
            {label}
        </NavLink>
    ));

    return (
        <nav className="site-nav" aria-label="Main navigation">
            <div className="nav-inner">
                <NavLink to="/about" className="site-brand" onClick={closeMenu}>
                    <span className="brand-monogram">KE</span>
                    <span className="brand-copy"><strong>Kieran Emery</strong><small>Developer portfolio</small></span>
                </NavLink>
                <div className="nav-desktop">
                    <div className="nav-links">{renderLinks('nav-link')}</div>
                    <div className="nav-social"><SocialMediaLinks /></div>
                </div>
                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu" id="mobile-navigation">
                    <div className="mobile-links">{renderLinks('mobile-link')}</div>
                    <SocialMediaLinks />
                </div>
            )}
        </nav>
    );
};

export default Navigation;