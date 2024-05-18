import React, { useState } from "react";
import "../styles/Contact.css";
import { Avatar, Badge, Space, Flex, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import randomColor from "../../../util/common_functions/randomColor";

const { Text } = Typography;

export default function Contact({ profileImage = null, isSelected, ...props }) {
  let imageAvailable = true;

  if (profileImage === null || "") {
    imageAvailable = false;
  }

  const userColor = randomColor(props.username.length);

  return (
    <Flex
      align="start"
      gap={12}
      className={isSelected ? "contact active" : "contact"}
    >
      <Badge dot={true} offset={[-20, 40]}>
        {imageAvailable ? (
          <Avatar
            size="large"
            icon={<img src={profileImage} alt={props.username} />}
          />
        ) : (
          <Avatar
            className="user-avatar"
            size="large"
            style={{ backgroundColor: userColor[0], color: userColor[1] }}
          >
            {props.username[0]}
          </Avatar>
        )}
      </Badge>
      <Flex gap={8} vertical style={{ flex: 1 }}>
        <Flex justify="space-between">
          <Text className="username-label" strong>
            {props.username}
          </Text>
          <Badge size="small" count={1} />
        </Flex>
        <Flex justify="space-between">
          <Text className="message-label" type="secondary">
            {props.lastMessage}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Space>
            <Text className="date-time" strong>
              {props.date}
            </Text>
            <Text className="date-time" strong>
              {props.time}
            </Text>
          </Space>
          <CheckOutlined style={{ color: "rgba(94, 74, 227)" }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
