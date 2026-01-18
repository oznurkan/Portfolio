import { useState, useEffect, useRef } from 'react';

export const useElementOnScreen = (options = { threshold: 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget); 
        observer.disconnect(); 
      }
    };
  }, [options]); 

  return [targetRef, isVisible];
};