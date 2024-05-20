import "../styles/ChatHeader.css";
import React from "react";
import { useRecoilState } from "recoil";
import { Avatar, Badge, Space, Flex, Typography, Button } from "antd";
import {
  PhoneOutlined,
  VideoCameraOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import randomColor from "../../../util/common_functions/randomColor";
import { showProfileState, collapsedState } from "../global_states/atoms";

const { Text } = Typography;

export default function ChatHeader({ currentId, userList, ...props }) {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);
  const [showProfile, setShowProfile] = useRecoilState(showProfileState);
  const userDetails = userList.filter(function (user) {
    return user.id === currentId;
  })[0];

  let imageAvailable = true;

  if (userDetails.profileImage === null || "") {
    imageAvailable = false;
  }

  const userColor = randomColor(userDetails.username.length);

  return (
    <Flex
      align="center"
      justify="space-between"
      gap={12}
      className="chat-header-container"
    >
      <Space
        className="profile-button"
        onClick={() => {
          if (!collapsed) {
            setCollapsed(!collapsed);
          }
          setShowProfile(!showProfile);
        }}
      >
        <Badge dot={true} offset={[-20, 40]}>
          {imageAvailable ? (
            <Avatar
              size="large"
              icon={
                <img
                  src={userDetails.profileImage}
                  alt={userDetails.username}
                />
              }
            />
          ) : (
            <Avatar
              className="user-avatar"
              size="large"
              style={{ backgroundColor: userColor[0], color: userColor[1] }}
            >
              {userDetails.username[0]}
            </Avatar>
          )}
        </Badge>
        <Space direction="vertical" size={4}>
          <Text strong className="chat-header-username">
            {userDetails.username}
          </Text>
          <Text type="secondary" className="chat-header-position">
            {userDetails.position}
          </Text>
        </Space>
      </Space>
      <Space className="chat-header-buttons">
        <Button ghost shape="circle" icon={<PhoneOutlined />} />
        <Button ghost shape="circle" icon={<VideoCameraOutlined />} />
        <Button ghost shape="circle" icon={<MoreOutlined />} />
      </Space>
    </Flex>
  );
}
