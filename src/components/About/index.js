import React from "react";
import styled from "styled-components";
import { HiOutlineCpuChip, HiOutlineArrowPath } from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";
import { SectionWrap, SectionInner, Kicker, Heading } from "../ui/Section";
import Reveal from "../Reveal";

const Body = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  & strong {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 44px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 26px 22px;
  text-align: left;
  height: 100%;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_light};
  }
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  font-size: 22px;
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 16px;
  & svg {
    color: ${({ theme }) => theme.accent};
  }
`;

const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 6px;
`;

const CardText = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const highlights = [
  {
    icon: <HiOutlineCode />,
    title: "Full-Stack Development",
    text: "End-to-end apps with Svelte/SvelteKit on the frontend and FastAPI + PostgreSQL on the backend.",
  },
  {
    icon: <HiOutlineCpuChip />,
    title: "AI / GenAI Integration",
    text: "Building features powered by the Gemini and Claude APIs, with a focus on practical prompt engineering.",
  },
  {
    icon: <HiOutlineArrowPath />,
    title: "Legacy → Modern Migration",
    text: "Modernizing legacy systems into maintainable, performant Svelte + FastAPI architectures.",
  },
];

const About = () => {
  return (
    <SectionWrap id="about">
      <SectionInner>
        <Reveal>
          <Kicker>About Me</Kicker>
          <Heading>A bit about my work</Heading>
        </Reveal>
        <Reveal delay={80}>
          <Body>
            I'm a <strong>Full Stack Developer</strong> who enjoys building
            modern, AI-powered web applications. My day-to-day focuses on{" "}
            <strong>Svelte / SvelteKit</strong> on the frontend and{" "}
            <strong>FastAPI, Python, and PostgreSQL</strong> on the backend. A
            big part of my recent work has been{" "}
            <strong>migrating a legacy system to a modern v2 stack</strong> —
            rebuilding the UI, designing clean APIs, improving auth/security,
            and integrating <strong>AI/GenAI</strong> capabilities to make the
            product more useful. I care about readable code, good UX, and
            shipping things that actually work.
          </Body>
        </Reveal>
        <Cards>
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={120 + i * 110}>
              <Card>
                <IconBox>{h.icon}</IconBox>
                <CardTitle>{h.title}</CardTitle>
                <CardText>{h.text}</CardText>
              </Card>
            </Reveal>
          ))}
        </Cards>
      </SectionInner>
    </SectionWrap>
  );
};

export default About;
