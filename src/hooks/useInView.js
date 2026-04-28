import { useEffect, useRef, useState } from 'react';

/**
 * useInView
 * Triggers `inView = true` once the element scrolls into the viewport.
 * Stays true after first reveal so animations don't replay.
 *
 * @param {{ rootMargin?: string, threshold?: number, once?: boolean }} [opts]
 */
export default function useInView(opts = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0.15, once = true } = opts;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, inView];
}
