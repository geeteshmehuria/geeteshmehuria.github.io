import React from "react";
import { useParallax } from "../../hooks/useParallax";

/**
 * Ergonomic wrapper around `useParallax`.
 *
 * Renders a positioned layer whose vertical offset tracks the scroll. Pass
 * `as` to render a styled-component (ref is forwarded to its DOM node), `speed`
 * for the parallax factor, and `max` to clamp travel. Keep CSS transform
 * animations on a CHILD, never on this node.
 */
const Parallax = ({
  speed = 0.15,
  max = 200,
  as: Tag = "div",
  className = "",
  style = {},
  children,
  ...rest
}) => {
  const ref = useParallax(speed, { max });
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Parallax;
