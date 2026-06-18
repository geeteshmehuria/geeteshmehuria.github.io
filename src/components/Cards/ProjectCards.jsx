import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { tiltCard } from "../ui/effects";
import { useTilt } from "../../hooks/useTilt";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  ${tiltCard}
  &:hover {
    --lift: -8px;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 24px 50px -24px rgba(139, 92, 246, 0.55);
  }
`;

const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
  overflow: hidden;
  background: ${({ theme }) => theme.gradientSoft};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  ${Card}:hover & img {
    transform: scale(1.06);
  }
`;

const Featured = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 8px 20px -8px rgba(139, 92, 246, 0.9);
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.16), rgba(34, 211, 238, 0.1));
  & svg {
    font-size: 30px;
    opacity: 0.7;
  }
  & span {
    font-size: 13px;
    letter-spacing: 0.04em;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 22px 22px;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Problem = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 3px 9px;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 6px;
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex: 1;
  justify-content: center;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  ${({ $primary, theme }) =>
    $primary
      ? `color:#fff; background:${theme.gradient}; &:hover{ filter:brightness(1.08); }`
      : `color:${theme.text_primary}; background:${theme.card_light}; border:1px solid ${theme.border}; &:hover{ border-color:${theme.primary}; }`}
  ${({ $disabled }) => $disabled && `opacity:0.45; pointer-events:none;`}
`;

const stop = (e) => e.stopPropagation();

const ProjectCards = ({ project, setOpenModal }) => {
  const tiltRef = useTilt(7);
  return (
    <Card ref={tiltRef} onClick={() => setOpenModal({ state: true, project })}>
      <Thumb>
        {project.featured && (
          <Featured>
            <FaStar /> Featured
          </Featured>
        )}
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <Placeholder>
            <HiOutlinePhotograph />
            <span>Screenshot coming soon</span>
          </Placeholder>
        )}
      </Thumb>
      <Body>
        <Title>
          {project.title}
          {project.subtitle && <Subtitle> · {project.subtitle}</Subtitle>}
        </Title>
        <Problem>{project.problem || project.description}</Problem>
        <Tags>
          {project.tags?.slice(0, 5).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Actions>
          <Btn
            href={project.github || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={stop}
            $disabled={!project.github}
          >
            <FaGithub /> {project.github ? "Code" : "Soon"}
          </Btn>
          <Btn
            $primary
            href={project.webapp || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={stop}
            $disabled={!project.webapp}
          >
            <FaExternalLinkAlt /> {project.webapp ? "Live" : "Soon"}
          </Btn>
        </Actions>
      </Body>
    </Card>
  );
};

export default ProjectCards;
