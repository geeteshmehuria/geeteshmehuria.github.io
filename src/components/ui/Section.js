import styled from "styled-components";
import { shimmerText } from "./effects";

/*
  Full-width premium section shell.

  - Sections span the full viewport width; horizontal padding scales with the
    viewport (clamp) so content "breathes" on large screens without ever
    touching the edge on small ones.
  - Generous vertical rhythm for that high-end, spacious feel.
  - `overflow: hidden` contains decorative parallax accents (Glow) so oversized
    blurred layers never trigger a horizontal scrollbar.
*/
export const SectionWrap = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(80px, 11vh, 140px) clamp(20px, 6vw, 80px);
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 76px 20px;
  }
`;

export const SectionInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${({ $wide }) => ($wide ? "1320px" : "1180px")};
  margin: 0 auto;
`;

export const Kicker = styled.span`
  display: block;
  text-align: ${({ $align }) => $align || "center"};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 10px;
`;

export const Heading = styled.h2`
  font-family: var(--font-display);
  text-align: ${({ $align }) => $align || "center"};
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  ${shimmerText}
`;

export const Lead = styled.p`
  max-width: 640px;
  margin: ${({ $align }) => ($align === "left" ? "0 0 48px" : "0 auto 48px")};
  text-align: ${({ $align }) => $align || "center"};
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 36px;
  }
`;

/*
  Decorative radial glow used as a parallax depth layer inside sections.
  Position/size/color are supplied per use (via styled extension or inline
  style). Always render behind content (z-index 0) and aria-hidden.
*/
export const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
`;
