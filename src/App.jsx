import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";
import { themeConfig } from "./config/themeConfig";
import DesktopBreakpoint from "./config/ResponsiveUtilities/DesktopBreakpoint";
import TabletBreakpoint from "./config/ResponsiveUtilities/TabletBreakpoint";
import MobileBreakpoint from "./config/ResponsiveUtilities/MobileBreakpoint";
import { DesktopLayout } from "./shared/components/Layouts";
import { TabletLayout } from "./shared/components/Layouts";
import { MobileLayout } from "./shared/components/Layouts";

export default function App() {
  return (
    <RecoilRoot>
      <ConfigProvider theme={themeConfig}>
        <DesktopBreakpoint>
          <DesktopLayout />
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <TabletLayout />
        </TabletBreakpoint>
        <MobileBreakpoint>
          <MobileLayout />
        </MobileBreakpoint>
      </ConfigProvider>
    </RecoilRoot>
  );
}
