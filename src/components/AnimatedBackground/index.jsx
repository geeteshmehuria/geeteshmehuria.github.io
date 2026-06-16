import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

/*
  Fixed, full-viewport background that "moves while scrolling".
  - Three soft gradient blobs that drift continuously (CSS keyframes)
  - Parallax: blobs shift at different rates with scroll (transform only, GPU)
  - A faint dotted grid + radial vignette for depth, no readability hit
  - Scroll work is rAF-throttled and skipped entirely under prefers-reduced-motion
*/

const drift1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(6%, 4%) scale(1.08); }
`;
const drift2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-5%, 6%) scale(1.12); }
`;
const drift3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(4%, -5%) scale(1.05); }
`;

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(
      1200px 800px at 50% -10%,
      rgba(139, 92, 246, 0.12),
      transparent 60%
    ),
    #0a0a0f;
  pointer-events: none;
`;

const Grid = styled.div`
  position: absolute;
  inset: -2px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  /* Parallax offset driven by --sy (set on scroll) */
  transform: translateY(calc(var(--sy, 0) * 0.06px));
  mask-image: radial-gradient(circle at 50% 30%, #000 0%, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at 50% 30%, #000 0%, transparent 78%);
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  will-change: transform;
`;

const Blob1 = styled(Blob)`
  width: 46vw;
  height: 46vw;
  max-width: 620px;
  max-height: 620px;
  top: -8%;
  left: -6%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.55), transparent 70%);
  animation: ${drift1} 22s ease-in-out infinite;
  transform: translateY(calc(var(--sy, 0) * 0.12px));
`;
const Blob2 = styled(Blob)`
  width: 42vw;
  height: 42vw;
  max-width: 560px;
  max-height: 560px;
  top: 30%;
  right: -10%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%);
  animation: ${drift2} 26s ease-in-out infinite;
  transform: translateY(calc(var(--sy, 0) * -0.1px));
`;
const Blob3 = styled(Blob)`
  width: 40vw;
  height: 40vw;
  max-width: 520px;
  max-height: 520px;
  bottom: -12%;
  left: 25%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.45), transparent 70%);
  animation: ${drift3} 30s ease-in-out infinite;
  transform: translateY(calc(var(--sy, 0) * 0.08px));
`;

const AnimatedBackground = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // keep the background static

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        root.style.setProperty("--sy", String(window.scrollY));
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Fixed ref={rootRef} aria-hidden="true">
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Grid />
    </Fixed>
  );
};

export default AnimatedBackground;
