import React from "react";
import styled from "styled-components";
import { HiAcademicCap } from "react-icons/hi";
import { education } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading } from "../ui/Section";
import Reveal from "../Reveal";

const Grid = styled.div`
  display: grid;
  gap: 16px;
  max-width: 820px;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 22px 24px;
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  font-size: 22px;
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.border};
  & svg { color: ${({ theme }) => theme.accent}; }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px;
`;

const School = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const DateText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Degree = styled.p`
  font-size: 14.5px;
  color: ${({ theme }) => theme.primary};
  margin-top: 4px;
`;

const Grade = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 3px;
`;

const Education = () => {
  return (
    <SectionWrap id="education">
      <SectionInner>
        <Reveal>
          <Kicker>Education</Kicker>
          <Heading>Academic background</Heading>
        </Reveal>
        <Grid>
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 90}>
              <Card>
                <IconBox>
                  <HiAcademicCap />
                </IconBox>
                <div>
                  <Head>
                    <School>{ed.school}</School>
                    <DateText>{ed.date}</DateText>
                  </Head>
                  <Degree>{ed.degree}</Degree>
                  {ed.grade && <Grade>Grade: {ed.grade}</Grade>}
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </SectionInner>
    </SectionWrap>
  );
};

export default Education;
