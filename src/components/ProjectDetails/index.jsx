import React, { useEffect } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlinePhotograph } from "react-icons/hi";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(5, 5, 10, 0.7);
  backdrop-filter: blur(6px);
  animation: fade 0.2s ease;
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 620px;
  max-height: 88vh;
  overflow-y: auto;
  background: #12121c;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  animation: pop 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  @keyframes pop {
    from { opacity: 0; transform: translateY(16px) scale(0.98); }
    to { opacity: 1; transform: none; }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  background: rgba(10, 10, 15, 0.6);
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.primary}; }
`;

const Cover = styled.div`
  width: 100%;
  height: 240px;
  background: ${({ theme }) => theme.gradientSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_secondary};
  & img { width: 100%; height: 100%; object-fit: cover; }
  & svg { font-size: 38px; opacity: 0.7; }
`;

const Content = styled.div`
  padding: 24px 28px 28px;
`;

const Title = styled.h3`
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

const Tag = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 4px 10px;
`;

const Desc = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 18px;
`;

const SubHead = styled.h4`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Features = styled.ul`
  margin: 0 0 22px;
  padding-left: 18px;
  & li {
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 7px;
  }
  & li::marker { color: ${({ theme }) => theme.primary}; }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 11px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  ${({ $primary, theme }) =>
    $primary
      ? `color:#fff; background:${theme.gradient}; &:hover{ filter:brightness(1.08); transform:translateY(-2px); }`
      : `color:${theme.text_primary}; background:${theme.card_light}; border:1px solid ${theme.border}; &:hover{ border-color:${theme.primary}; transform:translateY(-2px); }`}
  ${({ $disabled }) => $disabled && `opacity:0.45; pointer-events:none;`}
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const close = () => setOpenModal({ state: false, project: null });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!project) return null;

  return (
    <Overlay onClick={close}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Close onClick={close} aria-label="Close">
          <IoClose />
        </Close>
        <Cover>
          {project.image ? (
            <img src={project.image} alt={`${project.title} screenshot`} />
          ) : (
            <HiOutlinePhotograph />
          )}
        </Cover>
        <Content>
          <Title>{project.title}</Title>
          <Tags>
            {project.tags?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
          <Desc>{project.description}</Desc>
          {project.features?.length > 0 && (
            <>
              <SubHead>Key Features</SubHead>
              <Features>
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </Features>
            </>
          )}
          <Actions>
            <Btn
              href={project.github || undefined}
              target="_blank"
              rel="noreferrer"
              $disabled={!project.github}
            >
              <FaGithub /> View Code
            </Btn>
            <Btn
              $primary
              href={project.webapp || undefined}
              target="_blank"
              rel="noreferrer"
              $disabled={!project.webapp}
            >
              <FaExternalLinkAlt /> Live Demo
            </Btn>
          </Actions>
        </Content>
      </Dialog>
    </Overlay>
  );
};

export default ProjectDetails;
