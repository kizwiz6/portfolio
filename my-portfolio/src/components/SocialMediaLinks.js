// src/components/SocialMediaLinks.js

import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const SocialMediaLinks = () => (
    <div className="social-links">
        <a href="https://github.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={19} aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/kizwiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={19} aria-hidden="true" />
        </a>
        <a href="https://www.facebook.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
            <Facebook size={19} aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <Instagram size={19} aria-hidden="true" />
        </a>
        <a href="mailto:kizwiz@hotmail.co.uk" aria-label="Email" title="Email">
            <Mail size={19} aria-hidden="true" />
        </a>
    </div>
);

export default SocialMediaLinks;
