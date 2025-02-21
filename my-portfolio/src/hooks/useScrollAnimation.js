// src/hooks/useScrollAnimation.js
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 20 }
  });

  return [ref, animation];
};