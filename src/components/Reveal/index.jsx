import React from "react";
import { useReveal } from "../../hooks/useReveal";

/**
 * Wrapper that fades/slides its children in on scroll.
 * `delay` (ms) lets a parent stagger a list of children.
 * `variant` ("up" default | "left" | "right" | "scale") sets the entrance
 * direction (see `.reveal--*` in App.css).
 */
const Reveal = ({ children, delay = 0, variant, as: Tag = "div", className = "", style = {}, ...rest }) => {
  const [ref, visible] = useReveal();
  const variantClass = variant && variant !== "up" ? `reveal--${variant}` : "";
  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
