import { useEffect, useRef } from "react";

/**
 * Element-level parallax.
 *
 * Returns a ref; attach it to a (decorative / image) wrapper and the element is
 * translated vertically based on its position relative to the viewport center.
 *
 *  - `speed > 0` → element lags the scroll (moves slower) → "deeper" background feel
 *  - `speed < 0` → element leads the scroll (moves faster) → "closer" foreground pop
 *
 * Performance: a single rAF-throttled scroll/resize listener writes one
 * hardware-accelerated `translate3d`. Disabled entirely under
 * `prefers-reduced-motion`. Never attach this to the same node as a CSS
 * `transform` animation (e.g. a float keyframe) — wrap, don't merge.
 */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useParallax = (speed = 0.15, { max = 200 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || speed === 0 || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Distance of the element's center from the viewport's center.
      const delta = rect.top + rect.height / 2 - vh / 2;
      let offset = -delta * speed;
      if (offset > max) offset = max;
      else if (offset < -max) offset = -max;
      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [speed, max]);

  return ref;
};
