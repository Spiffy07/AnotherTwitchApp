import { useState, useEffect, useRef } from "react";

export const useIntersection = (options = { threshold: 0.1 }, animateOnce = false) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!animateOnce)
        // Update state when element enters/leaves view
        setIsIntersecting(entry.isIntersecting);
      else {
        // One time animations
        if (entry.isIntersecting) {
          setIsIntersecting(true);

          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
