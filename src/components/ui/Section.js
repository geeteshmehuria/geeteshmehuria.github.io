import styled from "styled-components";

export const SectionWrap = styled.section`
  position: relative;
  padding: 90px 24px;
  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

export const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Kicker = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 10px;
`;

export const Heading = styled.h2`
  font-family: var(--font-display);
  text-align: center;
  font-size: clamp(28px, 4.5vw, 40px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 14px;
`;

export const Lead = styled.p`
  max-width: 620px;
  margin: 0 auto 48px;
  text-align: center;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 36px;
  }
`;
