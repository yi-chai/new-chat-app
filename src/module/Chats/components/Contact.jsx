import "../styles/Contact.css";

import React from "react";
import { useRecoilState } from "recoil";
import { Avatar, Badge, Space, Flex, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { idNumberState, collapsedState } from "../global_states/atoms";
import randomColor from "../../../util/common_functions/randomColor";

const { Text } = Typography;

export default function Contact({ profileImage = null, isSelected, ...props }) {
  const [idNumber, setIdNumber] = useRecoilState(idNumberState);
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  let imageAvailable = true;

  if (profileImage === null || "") {
    imageAvailable = false;
  }

  const userColor = randomColor(props.username.length);

  async function handleClick(clickedUser) {
    setIdNumber(clickedUser);
    setCollapsed(true);
    return idNumber;
  }

  return (
    <Flex
      align="start"
      gap={12}
      className={isSelected ? "contact active" : "contact"}
      onClick={() => {
        handleClick(props.idNumber);
      }}
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
      <Flex gap={8} vertical className="contact-text">
        <Flex justify="space-between">
          <Text className="username-label" strong>
            {props.username}
          </Text>
          <Badge size="small" count={1} />
        </Flex>
        <Flex justify="space-between">
          <p className="message-label">{props.lastMessage}</p>
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
          <CheckOutlined className="check-icon" />
        </Flex>
      </Flex>
    </Flex>
  );
}
