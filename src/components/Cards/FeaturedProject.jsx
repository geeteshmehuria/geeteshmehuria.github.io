import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaStar, FaArrowRight, FaLock } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { Glow } from "../ui/Section";
import Parallax from "../Parallax";

/*
  Asymmetrical showcase row for a featured project.
  - Image + copy alternate sides every other row ($reverse).
  - The screenshot lives inside a premium browser-window mockup: it shows the
    top of the page by default and slowly scrolls through the WHOLE screenshot on
    hover (object-position), so nothing is permanently cropped.
  - Row aligns to the section grid (no edge bleed) so it lines up with the cards
    below it. A soft glow behind the window provides the parallax depth.
  Renders purely from existing project data — no content is added or changed.
*/

const Row = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $reverse }) =>
    $reverse ? "0.9fr 1.1fr" : "1.1fr 0.9fr"};
  align-items: center;
  gap: clamp(36px, 5vw, 80px);
  & + & {
    margin-top: clamp(72px, 10vh, 128px);
  }
  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Media = styled.div`
  position: relative;
  ${({ $reverse }) => $reverse && "order: 2;"}
  @media (max-width: 920px) {
    order: 0;
  }
`;

const GlowBehind = styled(Glow)`
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  opacity: 0.6;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
`;

/* Browser-window mockup */
const Window = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  background: #0d0d16;
  box-shadow: 0 50px 110px -45px rgba(139, 92, 246, 0.55), ${({ theme }) => theme.shadow};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 65px 130px -45px rgba(139, 92, 246, 0.7), ${({ theme }) => theme.shadow};
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.045);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  flex-shrink: 0;
  & span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  & span:nth-child(1) { background: #ff5f57; }
  & span:nth-child(2) { background: #febc2e; }
  & span:nth-child(3) { background: #28c840; }
`;

const UrlBar = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  flex: 1;
  min-width: 0;
  height: 24px;
  padding: 0 12px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  & svg { font-size: 10px; flex-shrink: 0; }
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Screen = styled.div`
  position: relative;
  width: 100%;
  /* Matches a standard 1920x1080 screenshot so it fits with no cropping */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.gradientSoft};
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: object-position 4.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  /* Scroll through the full screenshot on hover */
  ${Window}:hover & img {
    object-position: bottom center;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.16), rgba(34, 211, 238, 0.1));
  & svg { font-size: 34px; opacity: 0.7; }
  & span { font-size: 13.5px; letter-spacing: 0.04em; }
`;

const Badge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 13px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 10px 24px -10px rgba(139, 92, 246, 0.9);
`;

const Content = styled.div`
  position: relative;
  ${({ $reverse }) => $reverse && "order: 1;"}
  @media (max-width: 920px) {
    order: 0;
  }
`;

const Eyebrow = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 14px;
`;

const Title = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 14px;
`;

const Subtitle = styled.span`
  font-family: var(--font-body);
  font-size: 0.6em;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 22px;
  max-width: 540px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 26px;
`;

const Tag = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 5px 11px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const baseBtn = `
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 22px;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, border-color 0.2s ease, background 0.2s ease;
`;

const Primary = styled.button`
  ${baseBtn}
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 14px 32px -14px rgba(139, 92, 246, 0.9);
  &:hover { transform: translateY(-3px); box-shadow: 0 20px 42px -14px rgba(139, 92, 246, 1); }
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
  ${({ $disabled }) => $disabled && "opacity: 0.45; pointer-events: none;"}
`;

const stop = (e) => e.stopPropagation();

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const FeaturedProject = ({ project, setOpenModal, reverse = false }) => {
  const open = () => setOpenModal({ state: true, project });
  const host = hostOf(project.webapp || project.github) || "preview";

  return (
    <Row $reverse={reverse}>
      <Media $reverse={reverse}>
        <Parallax as={GlowBehind} speed={0.1} max={70} aria-hidden="true" />
        <Window onClick={open} role="button" aria-label={`View ${project.title} details`}>
          <Bar>
            <Dots>
              <span />
              <span />
              <span />
            </Dots>
            <UrlBar>
              <FaLock />
              <span>{host}</span>
            </UrlBar>
          </Bar>
          <Screen>
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            ) : (
              <Placeholder>
                <HiOutlinePhotograph />
                <span>Screenshot coming soon</span>
              </Placeholder>
            )}
            {project.featured && (
              <Badge>
                <FaStar /> Featured
              </Badge>
            )}
          </Screen>
        </Window>
      </Media>

      <Content $reverse={reverse}>
        <Eyebrow>Featured Project</Eyebrow>
        <Title>
          {project.title}
          {project.subtitle && <Subtitle> · {project.subtitle}</Subtitle>}
        </Title>
        <Desc>{project.problem || project.description}</Desc>
        <Tags>
          {project.tags?.slice(0, 6).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Actions>
          <Primary type="button" onClick={open}>
            View Details <FaArrowRight />
          </Primary>
          <Outline
            href={project.github || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={stop}
            $disabled={!project.github}
          >
            <FaGithub /> {project.github ? "Code" : "Soon"}
          </Outline>
          <Outline
            href={project.webapp || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={stop}
            $disabled={!project.webapp}
          >
            <FaExternalLinkAlt /> {project.webapp ? "Live" : "Soon"}
          </Outline>
        </Actions>
      </Content>
    </Row>
  );
};

export default FeaturedProject;
