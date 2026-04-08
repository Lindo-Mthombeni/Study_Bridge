import { useState, useEffect, useRef } from "react";


export function useItemObserver<T extends HTMLElement>(threshold: number) {
  const [isObserved, setIsObserved] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsObserved(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isObserved, transitionDone, setTransitionDone };
}



export function useScrollTrigger() {
  const [isTriggered, setIsTriggered] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsTriggered(true);
    }, {});

    if (anchorRef.current) observer.observe(anchorRef.current);
    return () => observer.disconnect();
  }, []);

  return { anchorRef, isTriggered };
}