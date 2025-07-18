import { useEffect, useRef, useState } from "react";

export function useAnimateOnInView(threshold = 0.8) {
  const onInViewRef = useRef<HTMLDivElement | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimationKey((prev) => prev + 1);
      } else {
        setAnimationKey(0);
      }
    });

    if (onInViewRef.current) {
      observer.observe(onInViewRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { onInViewRef, animationKey };
}
