import { useEffect, useRef } from "react";

/**
 * 3D tilt + spotlight for a card. Attach the returned ref to the card element;
 * on pointer move it writes:
 *   --rx / --ry : rotateX / rotateY in degrees (clamped to ±max)
 *   --gx / --gy : pointer position as a percentage (for a following glow)
 * Pair with the `tiltCard` mixin in ui/effects.js.
 *
 * rAF-throttled, resets on leave, and a no-op on touch / reduced-motion.
 */
const mql = (q) =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(q)
    : { matches: false };

export const useTilt = (max = 7) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!mql("(pointer: fine)").matches || mql("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    let rx = 0;
    let ry = 0;
    let gx = 50;
    let gy = 50;
    const apply = () => {
      raf = 0;
      node.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      node.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      node.style.setProperty("--gx", `${gx.toFixed(1)}%`);
      node.style.setProperty("--gy", `${gy.toFixed(1)}%`);
    };
    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    const onMove = (e) => {
      const r = node.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height;
      ry = (px - 0.5) * 2 * max;
      rx = -(py - 0.5) * 2 * max;
      gx = px * 100;
      gy = py * 100;
      schedule();
    };
    const onLeave = () => {
      rx = 0;
      ry = 0;
      gx = 50;
      gy = 50;
      schedule();
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
};
