// src/components/AnimatedSection.js
import React from 'react';
import { animated } from 'react-spring';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, animation] = useScrollAnimation();

  return (
    <animated.div ref={ref} style={animation} className={className}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;