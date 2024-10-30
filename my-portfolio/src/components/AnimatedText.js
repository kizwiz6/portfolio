// src/components/AnimatedText.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ text, style = {}, animationConfig = { opacity: 1 }, initialConfig = { opacity: 0 }, animationDelay = 200 }) => {
    const animationProps = useSpring({
        to: animationConfig,
        from: initialConfig,
        delay: animationDelay,
        config: { tension: 170, friction: 26 },
    });

    return (
        <animated.h1 style={{ ...animationProps, ...style }}>
            {text}
        </animated.h1>
    );
};

export default AnimatedText;
