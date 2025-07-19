import { useEffect, useRef, useState } from "react";

export function useAnimateOnInView(threshold = 0.8) {
  const onInViewRef = useRef<HTMLDivElement | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
          setInView(true);
        } else {
          setAnimationKey(0);
          setInView(false);
        }
      },
      { threshold }
    );

    if (onInViewRef.current) {
      observer.observe(onInViewRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { onInViewRef, animationKey, inView };
}
