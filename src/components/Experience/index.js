import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading, Lead } from "../ui/Section";
import Reveal from "../Reveal";

const Timeline = styled.div`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding-left: 34px;
  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.accent},
      transparent
    );
  }
`;

const Item = styled.div`
  position: relative;
  margin-bottom: 28px;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: "";
    position: absolute;
    left: -34px;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    border: 3px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 24px 26px;
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateX(4px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 4px;
`;

const Role = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const DateText = styled.span`
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin: 8px 0 14px;
`;

const Bullets = styled.ul`
  margin: 0 0 16px;
  padding-left: 18px;
  & li {
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 7px;
  }
  & li::marker {
    color: ${({ theme }) => theme.accent};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 4px 10px;
`;

const Experience = () => {
  return (
    <SectionWrap id="experience">
      <SectionInner>
        <Reveal>
          <Kicker>Experience</Kicker>
          <Heading>Work highlights</Heading>
          <Lead>
            Where I've been building, migrating, and shipping production work.
          </Lead>
        </Reveal>
        <Timeline>
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 100}>
              <Item>
                <Card>
                  <Head>
                    <Role>
                      {exp.role} · <Company>{exp.company}</Company>
                    </Role>
                    <DateText>{exp.date}</DateText>
                  </Head>
                  <Desc>{exp.desc}</Desc>
                  {exp.bullets?.length > 0 && (
                    <Bullets>
                      {exp.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </Bullets>
                  )}
                  {exp.skills?.length > 0 && (
                    <Tags>
                      {exp.skills.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </Tags>
                  )}
                </Card>
              </Item>
            </Reveal>
          ))}
        </Timeline>
      </SectionInner>
    </SectionWrap>
  );
};

export default Experience;
