import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import resume from "../resume/Geetesh-Mehuria-Resume.pdf";
import { Bio } from "../../data/constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  transition: backdrop-filter 0.3s ease, background 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: rgba(10, 10, 15, 0.7);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid ${theme.border};
    `}
`;

const Container = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 68px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  cursor: pointer;
`;

const Mark = styled.span`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  box-shadow: 0 6px 20px -6px rgba(139, 92, 246, 0.8);
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  @media (max-width: 860px) {
    display: none;
  }
`;

const Link = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 14px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ $active, theme }) => ($active ? theme.text_primary : theme.text_secondary)};
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
  &::after {
    content: "";
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.gradient};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 860px) {
    display: none;
  }
`;

const IconLink = styled.a`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 8px 24px -10px rgba(139, 92, 246, 0.9);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    box-shadow: 0 12px 30px -10px rgba(139, 92, 246, 1);
  }
  &:active {
    transform: translateY(0);
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 860px) {
    display: grid;
    place-items: center;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 24px 22px;
    background: rgba(10, 10, 15, 0.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid ${({ theme }) => theme.border};
    animation: slideDown 0.25s ease;
  }
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const MobileLink = styled.a`
  padding: 12px 6px;
  font-size: 16px;
  text-decoration: none;
  color: ${({ $active, theme }) => ($active ? theme.primary : theme.text_primary)};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
`;

const MobileResume = styled(ResumeBtn)`
  margin-top: 12px;
  justify-content: center;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <Container aria-label="Primary">
        <Logo href="#home">
          <Mark>GM</Mark>
          Geetesh
        </Logo>

        <Links>
          {sections.map((s) => (
            <li key={s.id}>
              <Link href={`#${s.id}`} $active={active === s.id ? 1 : 0}>
                {s.label}
              </Link>
            </li>
          ))}
        </Links>

        <Actions>
          <IconLink
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </IconLink>
          <ResumeBtn href={resume} download>
            <HiDownload /> Resume
          </ResumeBtn>
        </Actions>

        <Burger
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </Burger>
      </Container>

      {open && (
        <Mobile>
          {sections.map((s) => (
            <MobileLink
              key={s.id}
              href={`#${s.id}`}
              $active={active === s.id ? 1 : 0}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </MobileLink>
          ))}
          <MobileResume href={resume} download onClick={() => setOpen(false)}>
            <HiDownload /> Download Resume
          </MobileResume>
        </Mobile>
      )}
    </Nav>
  );
};

export default Navbar;
