import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

/*
  Fixed, full-viewport background that "moves while scrolling".
  - Three soft gradient orbs that continuously drift (CSS keyframes) AND parallax
    on scroll. Parallax lives on an OUTER wrapper, drift on the INNER orb, so the
    two transforms never clobber each other.
  - A faint dotted grid + radial vignette for depth, no readability hit.
  - Scroll work is a single rAF-throttled listener writing one `--sy` variable;
    every layer reads it via translate3d (GPU). Skipped entirely under
    prefers-reduced-motion.
*/

const drift1 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(6%, 4%, 0) scale(1.08); }
`;
const drift2 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-5%, 6%, 0) scale(1.12); }
`;
const drift3 = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(4%, -5%, 0) scale(1.05); }
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
    radial-gradient(
      900px 700px at 85% 110%,
      rgba(34, 211, 238, 0.08),
      transparent 60%
    ),
    #0a0a0f;
  pointer-events: none;
`;

/* Outer wrapper carries the scroll parallax; inner orb carries the drift. */
const OrbLayer = styled.div`
  position: absolute;
  will-change: transform;
`;

const Orb = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  will-change: transform;
`;

const Layer1 = styled(OrbLayer)`
  width: 46vw;
  height: 46vw;
  max-width: 620px;
  max-height: 620px;
  top: -8%;
  left: -6%;
  transform: translate3d(0, calc(var(--sy, 0) * 0.14px), 0);
`;
const Layer2 = styled(OrbLayer)`
  width: 42vw;
  height: 42vw;
  max-width: 560px;
  max-height: 560px;
  top: 30%;
  right: -10%;
  left: auto;
  transform: translate3d(0, calc(var(--sy, 0) * -0.1px), 0);
`;
const Layer3 = styled(OrbLayer)`
  width: 40vw;
  height: 40vw;
  max-width: 520px;
  max-height: 520px;
  bottom: -12%;
  left: 25%;
  transform: translate3d(0, calc(var(--sy, 0) * 0.08px), 0);
`;

const Orb1 = styled(Orb)`
  background: radial-gradient(circle, rgba(139, 92, 246, 0.55), transparent 70%);
  animation: ${drift1} 22s ease-in-out infinite;
`;
const Orb2 = styled(Orb)`
  background: radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%);
  animation: ${drift2} 26s ease-in-out infinite;
`;
const Orb3 = styled(Orb)`
  background: radial-gradient(circle, rgba(99, 102, 241, 0.45), transparent 70%);
  animation: ${drift3} 30s ease-in-out infinite;
`;

const Grid = styled.div`
  position: absolute;
  inset: -2px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  /* Parallax offset driven by --sy (set on scroll) */
  transform: translate3d(0, calc(var(--sy, 0) * 0.05px), 0);
  will-change: transform;
  mask-image: radial-gradient(circle at 50% 30%, #000 0%, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at 50% 30%, #000 0%, transparent 78%);
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
      <Layer1>
        <Orb1 />
      </Layer1>
      <Layer2>
        <Orb2 />
      </Layer2>
      <Layer3>
        <Orb3 />
      </Layer3>
      <Grid />
    </Fixed>
  );
};

export default AnimatedBackground;
