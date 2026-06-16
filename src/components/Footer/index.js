import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Wrap = styled.footer`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 44px 24px 36px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;
`;

const Name = styled.a`
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 22px;
`;

const Link = styled.a`
  font-size: 14.5px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  transition: color 0.2s ease;
  &:hover { color: ${({ theme }) => theme.text_primary}; }
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
`;

const Social = styled.a`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;
  &:hover {
    color: #fff;
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copy = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
`;

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const Footer = () => {
  return (
    <Wrap>
      <Inner>
        <Name href="#home">{Bio.name}</Name>
        <Links>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </Links>
        <Socials>
          <Social href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </Social>
          <Social href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </Social>
          <Social href={`mailto:${Bio.email}`} aria-label="Email">
            <FaEnvelope />
          </Social>
        </Socials>
        <Copy>© {new Date().getFullYear()} {Bio.name}. Built with React.</Copy>
      </Inner>
    </Wrap>
  );
};

export default Footer;
