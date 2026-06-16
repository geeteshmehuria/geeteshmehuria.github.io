import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading, Lead } from "../ui/Section";
import Reveal from "../Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
`;

const Card = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  padding: 26px 26px 30px;
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  &::before {
    content: "";
    width: 22px;
    height: 3px;
    border-radius: 3px;
    background: ${({ theme }) => theme.gradient};
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 8px 13px;
  transition: all 0.2s ease;
  cursor: default;
  &:hover {
    color: #fff;
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.gradientSoft};
    transform: translateY(-2px);
  }
`;

const Skills = () => {
  return (
    <SectionWrap id="skills">
      <SectionInner>
        <Reveal>
          <Kicker>Skills</Kicker>
          <Heading>Tools & technologies I work with</Heading>
          <Lead>
            A focused stack centered on Svelte, FastAPI, Python, PostgreSQL, and
            AI integration.
          </Lead>
        </Reveal>
        <Grid>
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <Card>
                <CardTitle>{group.title}</CardTitle>
                <Chips>
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </Chips>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </SectionInner>
    </SectionWrap>
  );
};

export default Skills;
