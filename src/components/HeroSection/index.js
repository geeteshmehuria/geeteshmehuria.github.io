import React from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Bio } from "../../data/constants";
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

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 24px 60px;
  @media (max-width: 860px) {
    min-height: auto;
    padding: 110px 20px 60px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 36px;
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
  font-size: clamp(38px, 6vw, 62px);
  line-height: 1.05;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  & .name {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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

const Portrait = styled.div`
  position: relative;
  width: clamp(240px, 32vw, 360px);
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

const HeroSection = () => {
  return (
    <Section id="home">
      <Inner>
        <Left>
          <Eyebrow>
            <span className="dot" /> Available for opportunities
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
          <Portrait>
            <Img
              src={HeroImg}
              alt="Portrait of Geetesh Mehuria"
              width="360"
              height="360"
              fetchpriority="high"
            />
          </Portrait>
        </Right>
      </Inner>
    </Section>
  );
};

export default HeroSection;
