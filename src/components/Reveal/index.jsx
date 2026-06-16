import React from "react";
import { useReveal } from "../../hooks/useReveal";

/**
 * Wrapper that fades/slides its children in on scroll.
 * `delay` (ms) lets a parent stagger a list of children.
 */
const Reveal = ({ children, delay = 0, as: Tag = "div", className = "", style = {}, ...rest }) => {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
