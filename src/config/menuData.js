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

// export const MENU_ITEMS = [

//   {
//     key: "/",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiHouse size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiHouse size={tabletSize}/>
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiHouse size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Home",
//   },
//   {
//     key: "/workspace",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiBuildingOffice size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiBuildingOffice size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiBuildingOffice size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Workspace",
//   },
//   {
//     key: "/history",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiHourglass size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiHourglass size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiHourglass size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "History",
//   },
//   {
//     key: "/chats",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiEnvelope size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiEnvelope size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiEnvelope size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Chats",
//   },
//   {
//     key: "/transactions",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiReceipt size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiReceipt size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiReceipt size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Transactions",
//   },
//   {
//     key: "/calendar",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiCalendarBlank size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiCalendarBlank size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiCalendarBlank size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Calendar",
//   },
//   {
//     key: "/comments",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiChatCircle size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiChatCircle size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiChatCircle size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Comments",
//   },
//   {
//     key: "/settings",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiGear size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiGear size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiGear size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Settings",
//   },
//   {
//     key: "/profile",
//     icon: (
//       <>
//         <DesktopBreakpoint>
//           <PiUserCircleFill size={desktopSize} />
//         </DesktopBreakpoint>
//         <TabletBreakpoint>
//           <PiUserCircleFill size={tabletSize} />
//         </TabletBreakpoint>
//         <MobileBreakpoint>
//           <PiUserCircleFill size={mobileSize} />
//         </MobileBreakpoint>
//       </>
//     ),
//     title: "Profile",
//   },
// ];
