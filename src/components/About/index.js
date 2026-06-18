import React from "react";
import styled from "styled-components";
import { HiOutlineCpuChip, HiOutlineArrowPath } from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";
import { SectionWrap, SectionInner, Kicker, Heading, Glow } from "../ui/Section";
import { tiltCard } from "../ui/effects";
import { useTilt } from "../../hooks/useTilt";
import Reveal from "../Reveal";
import Parallax from "../Parallax";

const GlowAccent = styled(Glow)`
  width: 560px;
  height: 560px;
  top: -120px;
  left: -180px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%);
`;

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
  ${tiltCard}
  &:hover {
    --lift: -6px;
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
    title: "SaaS & Database-Driven Apps",
    text: "Building SaaS features and database-backed workflows on PostgreSQL, with clean APIs and protected pages.",
  },
];

const HighlightCard = ({ item }) => {
  const tiltRef = useTilt(6);
  return (
    <Card ref={tiltRef}>
      <IconBox>{item.icon}</IconBox>
      <CardTitle>{item.title}</CardTitle>
      <CardText>{item.text}</CardText>
    </Card>
  );
};

const About = () => {
  return (
    <SectionWrap id="about">
      <Parallax as={GlowAccent} speed={0.16} max={110} aria-hidden="true" />
      <SectionInner>
        <Reveal>
          <Kicker>About Me</Kicker>
          <Heading>A bit about my work</Heading>
        </Reveal>
        <Reveal delay={80}>
          <Body>
            I'm a <strong>Full Stack Developer with 2+ years of experience</strong>{" "}
            building modern web applications, SaaS features, and AI-powered
            tools. I work across frontend, backend, and database layers using{" "}
            <strong>Svelte, React, Python, FastAPI, Node.js, PostgreSQL,
            MongoDB,</strong> and <strong>Tailwind CSS</strong>. My recent work
            includes building features for SaaS platforms such as{" "}
            <strong>Perseptiv</strong> — designing clean APIs, improving UI/UX
            and auth flows, maintaining database-driven workflows, and
            integrating <strong>AI/GenAI</strong> capabilities. I enjoy building
            practical products that solve real problems, with a focus on clean
            UI, reliable APIs, and maintainable code.
          </Body>
        </Reveal>
        <Cards>
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={120 + i * 110}>
              <HighlightCard item={h} />
            </Reveal>
          ))}
        </Cards>
      </SectionInner>
    </SectionWrap>
  );
};

export default About;
