import React from "react";
import MediaQuery from "react-responsive";

const breakpoints = {
  desktop: "(orientation: landscape) and (min-width: 1024px)",
  tablet:
    "(max-width: 1024px) and (orientation: portrait)",
  mobile: "(max-width: 539px) and (orientation: portrait)",
};

export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;

  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}
