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

export const DESKTOP_MENU_ITEMS = [
  [PiHouse, "/"],
  [PiBuildingOffice, "/workspace"],
  [PiHourglass, "/history"],
  [PiEnvelope, "/chats"],
  [PiReceipt, "/transactions"],
  [PiCalendarBlank, "/calendar"],
  [PiChatCircle, "/comments"],
  [PiGear, "/settings"],
  [PiUserCircleFill, "/profile"],
].map((icon) => ({
  key: icon[1],
  icon: React.createElement(icon[0], { size: "25" }),
}));
