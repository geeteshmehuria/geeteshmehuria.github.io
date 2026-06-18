import { useEffect, useRef, useState } from "react";

/**
 * Toggles the `is-visible` class (see App.css `.reveal`) based on whether the
 * element is currently in view.
 *
 * Unlike a one-shot reveal, this re-runs every time the element enters or
 * leaves the viewport: content animates IN when it scrolls into view and
 * animates back OUT when it scrolls away — so scrolling up hides it again and
 * scrolling back down replays the entrance.
 *
 * Uses a single IntersectionObserver per element (created once on mount, no
 * churn) and degrades gracefully where IntersectionObserver is unavailable.
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
        // Toggle in both directions instead of unobserving after first reveal.
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // Observe once on mount; options are read at creation time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
};
