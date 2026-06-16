import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading, Lead } from "../ui/Section";
import Reveal from "../Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const Projects = ({ setOpenModal }) => {
  return (
    <SectionWrap id="projects">
      <SectionInner>
        <Reveal>
          <Kicker>Projects</Kicker>
          <Heading>Selected work</Heading>
          <Lead>
            A few projects I've built — focused on full-stack development and
            AI-powered features. Click a card for details.
          </Lead>
        </Reveal>
        <Grid>
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 110}>
              <ProjectCard project={project} setOpenModal={setOpenModal} />
            </Reveal>
          ))}
        </Grid>
      </SectionInner>
    </SectionWrap>
  );
};

export default Projects;
