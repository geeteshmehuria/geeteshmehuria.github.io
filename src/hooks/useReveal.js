import { useEffect, useRef, useState } from "react";

/**
 * Adds the `is-visible` class (see App.css `.reveal`) once an element scrolls
 * into view. Uses a single IntersectionObserver per element, unobserves after
 * the first reveal so it never re-runs, and degrades gracefully where
 * IntersectionObserver is unavailable.
 */
export const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
};
