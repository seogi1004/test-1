import { useLayoutEffect, useRef, useState } from "react";

export default function useInViewport<T extends HTMLElement>(
  threshold: number = 0.2
) {
  const observingRef = useRef<T>(null);

  const [isInViewport, setIsInViewport] = useState(false);
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold }
    );
    if (observingRef.current) {
      observer.observe(observingRef.current);
    }
    return () => {
      if (observingRef.current) {
        observer.unobserve(observingRef.current);
      }
    };
  }, []);
  return [isInViewport, observingRef] as const;
}
