import "../styles/ChatFooter.css";
import React, { useState } from "react";
import { Space, Flex, Button, Input, Divider, ConfigProvider } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  PiLinkSimple,
  PiFile,
  PiSmiley,
  PiPaperclip,
  PiTextAUnderline,
  PiAt,
} from "react-icons/pi";
import postChats from "../../../api/postChats";

const { TextArea } = Input;

export default function ChatFooter({
  currentId,
  myId,
  userList,
  getTheChats,
  ...props
}) {
  const [message, setMessage] = useState("");

  function handleMessageBox(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }

    if (message.trim() !== "") {
      postChats(myId, currentId, message).then(getTheChats);
    }

    setMessage("");
  }

  return (
    <>
      <Divider className="skinny-divider" />
      <Flex
        align="center"
        justify="space-between"
        gap={12}
        className="chat-footer-container"
      >
        <TextArea
          placeholder="Type a message here..."
          className="chat-text-area"
          autoSize={{ minRows: 1, maxRows: 2 }}
          count={{
            max: 1000,
          }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onPressEnter={(e) => handleMessageBox(e)}
        />
        <Space direction="horizontal">
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBg: "transparent",
                  defaultHoverBg: "rgba(0, 0, 0, 0.2)",
                  defaultColor: "rgba(0, 0, 0, 0.8)",
                  defaultHoverColor: "rgba(0, 0, 0, 0.8)",
                  defaultHoverBorderColor: "transparent",
                },
              },
            }}
          >
            <Space size={3} className="text-area-small-buttons">
              <Button size="small" shape="circle" icon={<PiAt />} />
              <Button size="small" shape="circle" icon={<PiTextAUnderline />} />
              <Button size="small" shape="circle" icon={<PiPaperclip />} />
              <Button size="small" shape="circle" icon={<PiSmiley />} />
              <Button size="small" shape="circle" icon={<PiFile />} />
              <Button size="small" shape="circle" icon={<PiLinkSimple />} />
            </Space>
          </ConfigProvider>

          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBg: "rgba(254, 2, 83, 1)",
                  defaultHoverBg: "rgba(254, 2, 83, 0.5)",
                  defaultColor: "white",
                  defaultHoverColor: "white",
                  defaultHoverBorderColor: "transparent",
                },
              },
            }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<SendOutlined />}
              onClick={(e) => handleMessageBox(e)}
            />
          </ConfigProvider>
        </Space>
      </Flex>
    </>
  );
}
