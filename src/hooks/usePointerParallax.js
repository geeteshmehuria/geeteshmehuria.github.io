import { useEffect, useRef } from "react";

/**
 * Pointer (mouse) parallax. Attach the returned ref to a container; as the
 * cursor moves over it, the hook writes normalized coordinates --mx / --my
 * (each in the range -1..1, 0 at center) to that element. Descendants read the
 * variables to translate/tilt, creating a 3D depth effect.
 *
 * rAF-throttled, resets to center on leave, and a no-op on touch
 * (pointer: coarse) or under prefers-reduced-motion.
 */
const mql = (q) =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(q)
    : { matches: false };

export const usePointerParallax = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!mql("(pointer: fine)").matches || mql("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    let mx = 0;
    let my = 0;
    const apply = () => {
      raf = 0;
      node.style.setProperty("--mx", mx.toFixed(3));
      node.style.setProperty("--my", my.toFixed(3));
    };
    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    const onMove = (e) => {
      const r = node.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      schedule();
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
      schedule();
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
};
