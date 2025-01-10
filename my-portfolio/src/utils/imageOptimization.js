// src/utils/imageOptimization.js

export const getOptimizedImageUrl = (url, width = 800) => {
    // If it's an imgur URL, use their optimization parameters
    if (url?.includes('imgur.com')) {
        return url.replace(/\.(png|jpg|jpeg)/, 'm.$1');  // medium size
    }
    
    // If it's a dropbox URL, use their parameters
    if (url?.includes('dropbox.com')) {
        return `${url}&w=${width}`;
    }

    // If it's a GitHub URL, use raw content
    if (url?.includes('github.com')) {
        return url.replace('github.com', 'raw.githubusercontent.com')
                 .replace('/blob', '');
    }
    
    return url;
};