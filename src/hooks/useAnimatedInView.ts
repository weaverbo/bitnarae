import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseAnimatedInViewOptions {
  threshold?: number;
}

export function useAnimatedInView(options: UseAnimatedInViewOptions = {}) {
  const { threshold = 0.6 } = options;
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return { ref, inView, hasAnimated };
}
