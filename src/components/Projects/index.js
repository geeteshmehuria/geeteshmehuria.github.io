import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCards";
import FeaturedProject from "../Cards/FeaturedProject";
import { projects } from "../../data/constants";
import { SectionWrap, SectionInner, Kicker, Heading, Lead, Glow } from "../ui/Section";
import Reveal from "../Reveal";
import Parallax from "../Parallax";

const Featured = styled.div`
  margin-bottom: clamp(64px, 9vh, 120px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const GlowA = styled(Glow)`
  width: 540px;
  height: 540px;
  top: 4%;
  right: -160px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.22), transparent 70%);
`;
const GlowB = styled(Glow)`
  width: 600px;
  height: 600px;
  bottom: -6%;
  left: -200px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.22), transparent 70%);
`;

const Projects = ({ setOpenModal }) => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrap id="projects">
      <Parallax as={GlowA} speed={0.16} max={120} aria-hidden="true" />
      <Parallax as={GlowB} speed={-0.12} max={120} aria-hidden="true" />
      <SectionInner $wide>
        <Reveal>
          <Kicker>Projects</Kicker>
          <Heading>Selected work</Heading>
          <Lead>
            A few projects I've built — focused on full-stack development and
            AI-powered features. Click a card for details.
          </Lead>
        </Reveal>

        {featured.length > 0 && (
          <Featured>
            {featured.map((project, i) => (
              <Reveal key={project.id} variant={i % 2 === 0 ? "left" : "right"}>
                <FeaturedProject
                  project={project}
                  setOpenModal={setOpenModal}
                  reverse={i % 2 === 1}
                />
              </Reveal>
            ))}
          </Featured>
        )}

        <Grid>
          {rest.map((project, i) => (
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
