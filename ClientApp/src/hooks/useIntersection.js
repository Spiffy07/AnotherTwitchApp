import { useState, useEffect, useRef, useCallback } from "react";

export const useIntersection = (
  options = { threshold: 0.1 },
  animateOnce = true,
) => {
  const [isIntersectingSet, setIsIntersectingSet] = useState(new Set());
  const observerRef = useRef(null);

  const setItemRef = useCallback((node) => {
    if (!node) return;

    if (observerRef.current == null) {
    observerRef.current = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("dataId");

          if (entry.isIntersecting) {
            setIsIntersectingSet((prev) => new Set(prev).add(id));
            obs.unobserve(entry.target);      //TODO: this just doesnt work 
            // console.log("intersecting");   //intersect fires every frame
          } else if (!animateOnce) {
            setIsIntersectingSet((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        });
      }, options);
    }
    
    if (node && observerRef.current) observerRef.current.observe(node);
  });

  return [isIntersectingSet, setItemRef];
};
