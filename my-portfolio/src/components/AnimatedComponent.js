// src/components/AnimatedComponent.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = ({
    children,  // This will now include the AnimatedText
    style = {},
    animationConfig = {
      opacity: 1,
      transform: 'scale(1)',
      rotate: '0deg'
    },
    initialConfig = {
      opacity: 0,
      transform: 'scale(0.8)',
      rotate: '10deg'
    },
    animationDelay = 200,
}) => {
  const animationProps = useSpring({
    to: animationConfig,
    from: initialConfig,
    delay: animationDelay,
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div style={{ ...animationProps, ...style }}>
      {children}  {/* This can now include any child components like AnimatedText */}
    </animated.div>
  );
};

export default AnimatedComponent;
