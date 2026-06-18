import React, { useEffect, useRef } from "react";
import styled from "styled-components";

/*
  Thin gradient bar pinned to the very top that tracks page scroll progress.
  A single rAF-throttled scroll listener writes one hardware-accelerated
  scaleX — no layout, no repaint of the bar's pixels.
*/
const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: 0 50%;
  background: linear-gradient(90deg, #8b5cf6, #6366f1, #22d3ee);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
  z-index: 200;
  pointer-events: none;
  will-change: transform;
`;

const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const de = document.documentElement;
      const max = de.scrollHeight - de.clientHeight;
      const p = max > 0 ? de.scrollTop / max : 0;
      node.style.transform = `scaleX(${p.toFixed(4)})`;
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
  }, []);

  return <Bar ref={ref} aria-hidden="true" />;
};

export default ScrollProgress;
