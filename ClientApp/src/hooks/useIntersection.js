import { useState, useEffect, useRef, useCallback } from "react";

export const useIntersection = (
  options = { threshold: 0.1 },
  animateOnce = true,
) => {
  const [isIntersectingSet, setIsIntersectingSet] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("dataId");
        console.log(id);

          if (entry.isIntersecting) {
            setIsIntersectingSet((prev) => new Set(prev).add(id));
          } else if (!animateOnce) {
            setIsIntersectingSet((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        // else {               // One time animations
        //   if (entry.isIntersecting) {
        //     setIsIntersecting(true);

        //     if (elementRef.current)
        //       observerRef.current.unobserve(elementRef.current);
        //   }
        // }
      });
    }, options);

    // if (elementRef.current) observerRef.current.observe(elementRef.current);

    return () => {
      //if (elementRef.current) observerRef.current.unobserve(elementRef.current);
      observerRef.current.disconnect();
    };
  }, []);

  const setItemRef = useCallback((node) => {
    if (!node) return;

    if (observerRef.current == null) {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("dataId");
        console.log(id);

          if (entry.isIntersecting) {
            setIsIntersectingSet((prev) => new Set(prev).add(id));
          } else if (!animateOnce) {
            setIsIntersectingSet((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
          // else {               // One time animations
          //   if (entry.isIntersecting) {
          //     setIsIntersecting(true);

          //     if (elementRef.current)
          //       observerRef.current.unobserve(elementRef.current);
          //   }
          // }
        });
      }, options);
    }
    
    if (node && observerRef.current) observerRef.current.observe(node);
  });

  return [isIntersectingSet, setItemRef];
};
