import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading, Lead } from "../ui/Section";
import Reveal from "../Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  max-width: 820px;
  margin: 0 auto 36px;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 22px;
  border-radius: 16px;
  text-decoration: none;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_light};
  }
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  font-size: 19px;
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.border};
  & svg { color: ${({ theme }) => theme.accent}; }
`;

const Label = styled.span`
  display: block;
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Value = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  word-break: break-word;
`;

const CtaWrap = styled.div`
  text-align: center;
`;

const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 14px 34px -14px rgba(139, 92, 246, 0.9);
  transition: transform 0.2s ease, filter 0.2s ease;
  &:hover { transform: translateY(-3px); filter: brightness(1.06); }
`;

const Contact = () => {
  const cards = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: Bio.email,
      href: `mailto:${Bio.email}`,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "@geeteshmehuria",
      href: Bio.github,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "geetesh-mehuria",
      href: Bio.linkedin,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: Bio.location,
      href: Bio.linkedin,
    },
  ];

  return (
    <SectionWrap id="contact">
      <SectionInner>
        <Reveal>
          <Kicker>Contact</Kicker>
          <Heading>Let's build something</Heading>
          <Lead>
            I'm open to full-stack and AI-focused opportunities. Feel free to
            reach out — I'll get back to you.
          </Lead>
        </Reveal>
        <Grid>
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <Card
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <IconBox>{c.icon}</IconBox>
                <div>
                  <Label>{c.label}</Label>
                  <Value>{c.value}</Value>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
        <Reveal delay={120}>
          <CtaWrap>
            <Cta href={`mailto:${Bio.email}`}>
              <FaEnvelope /> Email Me
            </Cta>
          </CtaWrap>
        </Reveal>
      </SectionInner>
    </SectionWrap>
  );
};

export default Contact;
