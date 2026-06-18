import React from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Bio } from "../../data/constants";
import { Glow } from "../ui/Section";
import { shimmerBrand } from "../ui/effects";
import Parallax from "../Parallax";
import { usePointerParallax } from "../../hooks/usePointerParallax";
import HeroImg from "../../images/HeroImage.jpg";
import resume from "../resume/Geetesh-Mehuria-Resume.pdf";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
`;
const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.82; }
`;
const scrollDot = keyframes`
  0% { opacity: 0; transform: translate(-50%, 0); }
  35% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, 12px); }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding: clamp(120px, 18vh, 190px) clamp(20px, 6vw, 80px) clamp(70px, 10vh, 110px);
  @media (max-width: 860px) {
    min-height: auto;
    padding: 120px 20px 70px;
  }
`;

/* Section-level parallax glow orbs for depth */
const GlowTop = styled(Glow)`
  width: 620px;
  height: 620px;
  top: -180px;
  left: -150px;
  opacity: 0.55;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.28), transparent 70%);
`;
const GlowBottom = styled(Glow)`
  width: 560px;
  height: 560px;
  bottom: -200px;
  right: -130px;
  opacity: 0.45;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent 70%);
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(40px, 5vw, 72px);
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 44px;
  }
`;

const Left = styled.div`
  /* Stagger children on entrance */
  & > * {
    opacity: 0;
    animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  & > *:nth-child(1) { animation-delay: 0.05s; }
  & > *:nth-child(2) { animation-delay: 0.18s; }
  & > *:nth-child(3) { animation-delay: 0.31s; }
  & > *:nth-child(4) { animation-delay: 0.44s; }
  & > *:nth-child(5) { animation-delay: 0.57s; }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
  & span.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);
  }
  @media (max-width: 860px) {
    margin: 0 auto 20px;
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(40px, 6.4vw, 68px);
  line-height: 1.05;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  & .name {
    ${shimmerBrand}
  }
`;

const RoleLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  & .tw {
    color: ${({ theme }) => theme.accent};
  }
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const StackLine = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 22px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const Desc = styled.p`
  max-width: 560px;
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  @media (max-width: 860px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 26px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const baseBtn = `
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
`;

const Primary = styled.a`
  ${baseBtn}
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 12px 30px -12px rgba(139, 92, 246, 0.9);
  &:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -12px rgba(139, 92, 246, 1); }
  &:active { transform: translateY(0); }
  & svg { transition: transform 0.2s ease; }
  &:hover svg { transform: translateX(3px); }
`;

const Outline = styled.a`
  ${baseBtn}
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_light};
  }
  &:active { transform: translateY(0); }
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const Social = styled.a`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  font-size: 19px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  transition: all 0.2s ease;
  &:hover {
    color: #fff;
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 10px 24px -12px rgba(139, 92, 246, 0.9);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeUp} 0.8s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const PortraitWrap = styled.div`
  position: relative;
  width: clamp(250px, 32vw, 380px);
`;

/*
  Soft gradient aura behind the portrait. Blur is STATIC (rasterized once);
  only opacity animates (compositor-friendly) — no per-frame re-rasterization,
  so it stays smooth and cheap.
*/
const Aura = styled.div`
  position: absolute;
  inset: -24%;
  z-index: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 42%,
    rgba(139, 92, 246, 0.55),
    rgba(34, 211, 238, 0.22) 52%,
    transparent 72%
  );
  filter: blur(46px);
  animation: ${pulse} 7s ease-in-out infinite;
  /* Drifts with the cursor (behind the portrait, moves more for depth) */
  transform: translate3d(calc(var(--mx, 0) * 16px), calc(var(--my, 0) * 16px), 0);
  transition: transform 0.3s ease-out;
`;

/* Carries the cursor-driven tilt + counter-drift of the portrait itself. */
const PortraitMove = styled.div`
  position: relative;
  z-index: 1;
  transform: perspective(900px) rotateY(calc(var(--mx, 0) * 6deg))
    rotateX(calc(var(--my, 0) * -6deg))
    translate3d(calc(var(--mx, 0) * -7px), calc(var(--my, 0) * -7px), 0);
  transition: transform 0.3s ease-out;
`;

const Portrait = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 1;
  animation: ${float} 6s ease-in-out infinite;
  &::before {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 28px;
    padding: 2px;
    background: ${({ theme }) => theme.gradient};
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.9;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    box-shadow: 0 40px 80px -30px rgba(139, 92, 246, 0.6);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  z-index: 1;
`;

const ScrollCue = styled.a`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.7;
  transition: opacity 0.2s ease, color 0.2s ease;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.text_primary};
  }
  & .mouse {
    position: relative;
    width: 24px;
    height: 38px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 12px;
  }
  & .mouse::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 7px;
    border-radius: 2px;
    background: ${({ theme }) => theme.accent};
    animation: ${scrollDot} 1.7s ease-in-out infinite;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;

const HeroSection = () => {
  const heroRef = usePointerParallax();
  return (
    <Section id="home" ref={heroRef}>
      <Parallax as={GlowTop} speed={0.2} max={140} aria-hidden="true" />
      <Parallax as={GlowBottom} speed={-0.16} max={140} aria-hidden="true" />
      <Inner>
        <Left>
          <Eyebrow>
            <span className="dot" /> {Bio.experience} · Full Stack Developer
          </Eyebrow>
          <Title>
            Hi, I'm <span className="name">{Bio.name}</span>
          </Title>
          <RoleLine>
            I build
            <span className="tw">
              <Typewriter
                options={{ strings: Bio.roles, autoStart: true, loop: true }}
              />
            </span>
          </RoleLine>
          <StackLine>{Bio.stack}</StackLine>
          <Desc>{Bio.description}</Desc>
          <div>
            <Ctas>
              <Primary href="#projects">
                View Projects <FaArrowRight />
              </Primary>
              <Outline href={resume} download>
                <HiDownload /> Download Resume
              </Outline>
              <Outline href="#contact">Contact Me</Outline>
            </Ctas>
            <Socials>
              <Social
                href={Bio.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </Social>
              <Social
                href={Bio.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Social>
            </Socials>
          </div>
        </Left>

        <Right>
          <PortraitWrap>
            <Aura aria-hidden="true" />
            <PortraitMove>
              <Portrait>
                <Img
                  src={HeroImg}
                  alt="Portrait of Geetesh Mehuria"
                  width="380"
                  height="380"
                  fetchpriority="high"
                />
              </Portrait>
            </PortraitMove>
          </PortraitWrap>
        </Right>
      </Inner>

      <ScrollCue href="#about" aria-label="Scroll to About">
        <span className="mouse" />
        Scroll
      </ScrollCue>
    </Section>
  );
};

export default HeroSection;
