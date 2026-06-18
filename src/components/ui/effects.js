import { css, keyframes } from "styled-components";

/* Slow gradient sweep used for shimmering text. */
export const shimmer = keyframes`
  to { background-position: 220% center; }
`;

/*
  Mostly-white heading text with a subtle violet→cyan light sweeping across.
  Both ends of the gradient are the readable light color, so under
  prefers-reduced-motion (animation frozen) the text stays legible.
*/
export const shimmerText = css`
  background: linear-gradient(
    110deg,
    #f1f5f9 0%,
    #f1f5f9 38%,
    #8b5cf6 48%,
    #22d3ee 56%,
    #f1f5f9 66%,
    #f1f5f9 100%
  );
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${shimmer} 9s linear infinite;
`;

/* Full violet→cyan brand gradient with an animated sheen (for the name/logo). */
export const shimmerBrand = css`
  background: linear-gradient(
    110deg,
    #8b5cf6 0%,
    #6366f1 28%,
    #22d3ee 50%,
    #6366f1 72%,
    #8b5cf6 100%
  );
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${shimmer} 7s linear infinite;
`;

/*
  3D tilt + cursor-following spotlight for cards. Pair with the `useTilt` hook
  (which sets --rx/--ry/--gx/--gy) and a `&:hover { --lift: -Npx; }` for the
  raise. The hover lift lives inside the transform via --lift so it composes
  with the tilt instead of being overwritten. Disabled where hover is absent.
*/
export const tiltCard = css`
  position: relative;
  transform: perspective(820px) translateY(var(--lift, 0px)) rotateX(var(--rx, 0deg))
    rotateY(var(--ry, 0deg));
  transition: transform 0.25s ease-out, border-color 0.25s ease,
    box-shadow 0.25s ease, background 0.25s ease;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      440px circle at var(--gx, 50%) var(--gy, 50%),
      rgba(139, 92, 246, 0.16),
      transparent 48%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }
  &:hover::after {
    opacity: 1;
  }
  @media (hover: none) {
    transform: none;
    &::after {
      display: none;
    }
  }
`;
