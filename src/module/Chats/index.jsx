import React from "react";
import { Layout, Card, Flex, Input, Button, Typography } from "antd";
import "./styles/index.css";
import { SearchOutlined } from "@ant-design/icons";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";

const { Content, Header } = Layout;
const { Title } = Typography;

export default function ChatLayout() {
  return (
    <Layout>
      <Header>
        <Title level={3}>Chats</Title>
      </Header>
      <Content style={{ minHeight: "100vh", maxHeight: "100vh" }}>
        <Flex
          gap={15}
          style={{
            padding: "10px 30px",
            width: "100%",
            height: "calc(100% - 64px)",
          }}
        >
          <Flex gap={15} vertical>
            <Card style={{ width: "20vw", flex: "1", maxHeight: "60%" }}>
              <ContactList />
            </Card>
            <Card style={{ flex: "0.5" }}>
              <p>Card content 2</p>
            </Card>
          </Flex>
          <Card style={{ flex: 1 }}>
            <p>Card content 3</p>
          </Card>
          <Card style={{ marginLeft: -32, flex: 0.55 }}>
            <p>
              Card content 4<br></br>
              <br></br>dd
            </p>
          </Card>
        </Flex>
      </Content>
    </Layout>
  );
}
