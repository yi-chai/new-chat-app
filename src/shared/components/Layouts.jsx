import "../styles/Layouts.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import RoutedContent from "../../pkg/router/RoutedContent";
import { myIdNumberState } from "../../module/Chats/global_states/atoms";

import { Layout, Menu, Avatar, Flex, Typography } from "antd";
import { DESKTOP_MENU_ITEMS } from "../../config/menuData";
import getUsers from "../../api/getUsers";
import MyProfile from "../../module/Chats/components/MyProfile";

const { Sider } = Layout;

const userList = await getUsers();

export function DesktopLayout() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const menuItems = DESKTOP_MENU_ITEMS;
  const myId = useRecoilValue(myIdNumberState);

  const userDetails = userList.filter(function (user) {
    return user.id === myId;
  })[0];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
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
              theme="dark"
              mode="inline"
              items={menuItems}
              className="sider-menu"
            />
          </Sider>
          <Flex
            onClick={showDrawer}
            vertical
            align="center"
            className="sider-profile-button"
          >
            <Avatar size={60} src={userDetails.profileImage}></Avatar>
            <div style={{ maxWidth: "83px" }}>
              <p className="sider-profile-button-text">
                {userDetails.username}
              </p>
            </div>
          </Flex>
        </Flex>
        <RoutedContent />
        <MyProfile
          userDetails={userDetails}
          onClose={onClose}
          open={open}
        ></MyProfile>
      </Layout>
    </>
  );
}

export function TabletLayout() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const menuItems = DESKTOP_MENU_ITEMS;
  const myId = useRecoilValue(myIdNumberState);

  const userDetails = userList.filter(function (user) {
    return user.id === myId;
  })[0];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <Flex
          gap={20}
          justify="space-between"
          align="center"
          style={{
            width: "100vw",
          }}
        >
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            defaultSelectedKeys={[window.location.pathname]}
            theme="dark"
            mode="horizontal"
            items={menuItems}
            className="sider-menu"
          />
          <Flex
            gap={20}
            onClick={showDrawer}
            align="center"
            style={{
              cursor: "pointer",
            }}
          >
            <Avatar
              size={50}
              src={userDetails.profileImage}
              className="sider-profile-button-avatar"
            ></Avatar>
          </Flex>
        </Flex>
        <RoutedContent />
        <MyProfile
          userDetails={userDetails}
          onClose={onClose}
          open={open}
        ></MyProfile>
      </Layout>
    </>
  );
}

export function MobileLayout() {
  const navigate = useNavigate();
  const menuItems = DESKTOP_MENU_ITEMS;

  return (
    <>
      <Layout>
        <Flex
          gap={20}
          justify="space-between"
          style={{
            width: "100vw",
          }}
        >
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            defaultSelectedKeys={[window.location.pathname]}
            theme="dark"
            mode="horizontal"
            items={menuItems}
            className="sider-menu"
          ></Menu>
        </Flex>
        <RoutedContent />
      </Layout>
    </>
  );
}
