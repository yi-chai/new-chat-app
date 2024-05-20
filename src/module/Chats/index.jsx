import "./styles/index.css";

import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  idNumberState,
  myIdNumberState,
  showProfileState,
  collapsedState,
} from "./global_states/atoms";

import ContactList from "./components/ContactList";
import GroupList from "./components/GroupList";
import ChatHeader from "./components/ChatHeader";
import Chat from "./components/Chat";
import ChatFooter from "./components/ChatFooter";
import Profile from "./components/Profile";

import { Layout, Card, Flex, Typography, Button } from "antd";

import DesktopBreakpoint from "../../config/ResponsiveUtilities/DesktopBreakpoint";
import TabletBreakpoint from "../../config/ResponsiveUtilities/TabletBreakpoint";
import MobileBreakpoint from "../../config/ResponsiveUtilities/MobileBreakpoint";

import getChats from "../../api/getChats";
import getUsers from "../../api/getUsers";

const { Content, Header, Sider } = Layout;
const { Title } = Typography;

const chatList = await getChats();
const userList = await getUsers();

export default function ChatLayout() {
  const currentId = useRecoilValue(idNumberState);
  const myId = useRecoilValue(myIdNumberState);
  const [showProfile, setShowProfile] = useRecoilState(showProfileState);
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);
  const [chatList, setChatList] = useState([]);

  async function getTheChats() {
    const newChats = await getChats();
    setChatList(newChats);
  }

  useEffect(() => {
    getTheChats();
  }, []);

  return (
    <>
      <DesktopBreakpoint>
        <Layout>
          <Header>
            <Flex justify="space-between" align="center">
              <Title level={3} className="header-title">
                Chats
              </Title>
              <Button type="link" style={{ fontSize: "20px" }}>
                Add New Profile
              </Button>
            </Flex>
          </Header>
          <Content className="chat-layout-content">
            <Flex gap={15} className="chat-layout-content-cards">
              <Flex gap={15} vertical>
                <Card className="layout-card top-left-card" bordered={false}>
                  <ContactList />
                </Card>
                <Card className="layout-card bottom-left-card" bordered={false}>
                  <GroupList />
                </Card>
              </Flex>
              <Card
                className="layout-card middle-card"
                bordered={false}
                title={<ChatHeader currentId={currentId} userList={userList} />}
              >
                <Chat
                  currentId={currentId}
                  myId={myId}
                  chatList={chatList}
                  userList={userList}
                />
                <ChatFooter
                  currentId={currentId}
                  userList={userList}
                  myId={myId}
                  getTheChats={getTheChats}
                ></ChatFooter>
              </Card>
              {showProfile ? (
                <Card className="layout-card right-card" bordered={false}>
                  <Profile
                    currentId={currentId}
                    myId={myId}
                    userList={userList}
                  ></Profile>
                </Card>
              ) : (
                <></>
              )}
            </Flex>
          </Content>
        </Layout>
      </DesktopBreakpoint>
      <TabletBreakpoint>
        <Layout>
          <Sider
            collapsible
            collapsedWidth={0}
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            width="30vw"
            style={{ margin: "12px" }}
          >
            <Flex gap={15} vertical>
              <Card className="layout-card top-left-card" bordered={false}>
                <ContactList />
              </Card>
              <Card className="layout-card bottom-left-card" bordered={false}>
                <GroupList />
              </Card>
            </Flex>
          </Sider>
          <Flex vertical>
            <Header>
              <Flex justify="space-between" align="center">
                <Title level={3} className="header-title">
                  Chats
                </Title>
                <Button type="link" style={{ fontSize: "20px" }}>
                  Add New Profile
                </Button>
              </Flex>
            </Header>
            <Content className="chat-layout-content">
              <Flex gap={15} className="chat-layout-content-cards">
                <Card
                  className="layout-card middle-card"
                  bordered={false}
                  title={
                    <ChatHeader currentId={currentId} userList={userList} />
                  }
                >
                  <Chat
                    currentId={currentId}
                    myId={myId}
                    chatList={chatList}
                    userList={userList}
                  />
                  <ChatFooter
                    currentId={currentId}
                    userList={userList}
                    myId={myId}
                    getTheChats={getTheChats}
                  ></ChatFooter>
                </Card>
                {showProfile ? (
                  <Card className="layout-card right-card" bordered={false}>
                    <Profile
                      currentId={currentId}
                      myId={myId}
                      userList={userList}
                    ></Profile>
                  </Card>
                ) : (
                  <></>
                )}
              </Flex>
            </Content>
          </Flex>
        </Layout>
      </TabletBreakpoint>
      <MobileBreakpoint>
        <Layout>
          <Sider
            onCollapse={() => {
              if (showProfile) {
                setShowProfile(!showProfile);
              }
              setCollapsed(!collapsed);
            }}
            collapsible
            collapsedWidth={0}
            collapsed={collapsed}
            width="70vw"
            style={{ margin: "12px" }}
          >
            <Flex gap={15} vertical>
              <Card className="layout-card top-left-card" bordered={false}>
                <ContactList />
              </Card>
              <Card className="layout-card bottom-left-card" bordered={false}>
                <GroupList />
              </Card>
            </Flex>
          </Sider>
          <Flex vertical>
            <Header>
              <Title level={3} className="header-title">
                Chats
              </Title>
            </Header>
            <Content className="chat-layout-content">
              <Flex gap={15} className="chat-layout-content-cards">
                <Card
                  className="layout-card middle-card"
                  bordered={false}
                  title={
                    <ChatHeader currentId={currentId} userList={userList} />
                  }
                >
                  <Chat
                    currentId={currentId}
                    myId={myId}
                    chatList={chatList}
                    userList={userList}
                  />
                  <ChatFooter
                    currentId={currentId}
                    userList={userList}
                    myId={myId}
                    getTheChats={getTheChats}
                  />
                </Card>
                {showProfile ? (
                  <Card className="layout-card right-card" bordered={false}>
                    <Profile
                      currentId={currentId}
                      myId={myId}
                      userList={userList}
                    ></Profile>
                  </Card>
                ) : (
                  <></>
                )}
              </Flex>
            </Content>
          </Flex>
        </Layout>
      </MobileBreakpoint>
    </>
  );
}
