import React from "react";
import Breakpoint from "./Breakpoint";

export default function MobileBreakpoint(props) {
  return <Breakpoint name="mobile">{props.children}</Breakpoint>;
}
