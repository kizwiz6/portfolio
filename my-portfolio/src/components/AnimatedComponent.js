// src/components/AnimatedComponent.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'scale(1)', rotate: '0deg' },
    from: { opacity: 0, transform: 'scale(0.5)', rotate: '20deg' },
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div
      style={{
        ...props,
        background: 'linear-gradient(135deg, #6e7ff3, #8c6fff)', // Gradient background
        padding: '20px',
        borderRadius: '15px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)', // Shadow for depth
      }}
    >
      <h2 className="text-3xl font-bold">Welcome to My Portfolio!</h2>
      <p className="text-lg">I'm a software developer building innovative solutions with modern technologies.</p>
    </animated.div>
  );
};

export default AnimatedComponent;
