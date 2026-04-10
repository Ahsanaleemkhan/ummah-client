import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView].
 * `inView` toggles true/false as the element enters and leaves the viewport —
 * so scroll-triggered CSS transitions re-play every time the section appears.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
