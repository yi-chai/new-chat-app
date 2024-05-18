import "../styles/Layouts.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import RoutedContent from "../../pkg/router/RoutedContent";

import { Layout, Menu, Avatar, Flex, Typography, FloatButton } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { DESKTOP_MENU_ITEMS } from "../../config/menuData";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export function DesktopLayout() {
  const navigate = useNavigate();
  const menuItems = DESKTOP_MENU_ITEMS;

  return (
    <Layout>
      <Flex
        wrap
        vertical
        justify="space-between"
        align="start"
        style={{
          height: "100vh",
        }}
      >
        <Sider collapsedWidth="0" width="fit-content">
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            defaultSelectedKeys={[window.location.pathname]}
            id="sider-menu"
            theme="dark"
            mode="inline"
            items={menuItems}
            style={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: "fit-content",
              borderRadius: "0 0 45px 0",
            }}
          />
        </Sider>
        <Flex
          vertical
          align="center"
          style={{
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "red",
            overflow: "hidden",

            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Avatar size="large"></Avatar>
          {/* <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                <Text strong style={{}}>
                  Ant Design (strong)
                </Text>
              </div> */}
        </Flex>
      </Flex>
      <RoutedContent />
    </Layout>
  );
}
