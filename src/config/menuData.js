import React from "react";
import {
  PiHouse,
  PiBuildingOffice,
  PiHourglass,
  PiEnvelope,
  PiReceipt,
  PiCalendarBlank,
  PiChatCircle,
  PiGear,
  PiUserCircleFill,
} from "react-icons/pi";

import DesktopBreakpoint from "./ResponsiveUtilities/DesktopBreakpoint.jsx";
import TabletBreakpoint from "./ResponsiveUtilities/TabletBreakpoint.jsx";
import MobileBreakpoint from "./ResponsiveUtilities/MobileBreakpoint.jsx";

const desktopSize = "25";
const tabletSize = "20";
const mobileSize = "20";

export const DESKTOP_MENU_ITEMS = [
  [PiHouse, "/"],
  [PiBuildingOffice,  "/workspace"],
  [PiHourglass,  "/history"],
  [PiEnvelope,  "/chats"],
  [PiReceipt,  "/transactions"],
  [PiCalendarBlank,  "/calendar"],
  [PiChatCircle,  "/comments"],
  [PiGear,  "/settings"],
  [PiUserCircleFill,  "/profile"],
].map((icon) => ({
  key: icon[1],
  icon: React.createElement(icon[0], { size: "25" }),
}));


export const MOBILE_MENU_ITEMS = [
  [PiHouse, "/"],
  [PiBuildingOffice,  "/workspace"],
  [PiHourglass,  "/history"],
  [PiEnvelope,  "/chats"],
  [PiReceipt,  "/transactions"],
  [PiCalendarBlank,  "/calendar"],
  [PiChatCircle,  "/comments"],
  [PiGear,  "/settings"],
  [PiUserCircleFill,  "/profile"],
].map((icon) => ({
  key: icon[1],
  icon: React.createElement(icon[0], { size: "25" }),
}));