import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const SuspenseBoundary = ({ 
  children,
  fallback = <LoadingSpinner />,
  minDelay = 500 // Minimum delay to show loading state
}) => {
  return (
    <Suspense
      fallback={
        <DelayedFallback delay={minDelay}>
          {fallback}
        </DelayedFallback>
      }
    >
      {children}
    </Suspense>
  );
};

// DelayedFallback component to prevent loading flash
const DelayedFallback = ({ children, delay }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? children : null;
};

export default SuspenseBoundary;