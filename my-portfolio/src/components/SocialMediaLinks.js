// src/components/SocialMediaLinks.js

import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const SocialMediaLinks = () => (
    <div className="hidden md:flex space-x-4">
        <a href="https://github.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="text-gray-600 hover:text-blue-600" size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kizwiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="text-gray-600 hover:text-blue-600" size={24} />
        </a>
        <a href="https://www.facebook.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="text-gray-600 hover:text-blue-600" size={24} />
        </a>
        <a href="https://www.instagram.com/kizwiz6" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="text-gray-600 hover:text-blue-600" size={24} />
        </a>
        <a href="mailto:kizwiz@hotmail.co.uk" aria-label="Email">
            <Mail className="text-gray-600 hover:text-blue-600" size={24} />
        </a>
    </div>
);

export default SocialMediaLinks;
