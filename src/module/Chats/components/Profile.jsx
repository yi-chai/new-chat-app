import "../styles/Profile.css";

import {
  Image,
  Card,
  Flex,
  Typography,
  Space,
  Button,
  ConfigProvider,
  Divider,
} from "antd";
import Group from "./Group";
import {
  EnvironmentOutlined,
  UserAddOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import getGroups from "../../../api/getGroups";
import getChats from "../../../api/getChats";

const { Text } = Typography;

const groupList = await getGroups();
const chatList = await getChats();

export default function Profile({ currentId, myId, userList }) {
  const userDetails = userList?.filter(function (user) {
    return user.id === currentId;
  })[0];

  const userGroups = groupList?.filter(({ users }) =>
    users.includes(currentId)
  );

  const myMessages = chatList
    ?.filter(({ fromUser, toUser }) => fromUser === myId || toUser === myId)
    .reverse()
    ?.filter(
      ({ fromUser, toUser }) => fromUser === currentId || toUser === currentId
    );

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <>
      <div id="profile-tab" className="profile">
        <Flex vertical align="center" justify="start" className="profile-flex">
          <Card id="profile-tab" className="profile-image-container">
            <Image className="profile-image" src={userDetails.profileImage} />
          </Card>
          <div className="contact-card">
            <Flex vertical justify="center" align="center" gap={10}>
              <Text strong className="profile-username">
                {userDetails.username}
              </Text>
              <Text type="secondary" className="profile-position">
                {userDetails.position}
              </Text>
              <Space>
                <EnvironmentOutlined />
                <Text strong className="profile-address">
                  {userDetails.address}
                </Text>
              </Space>
            </Flex>
          </div>
          <Space>
            <Button
              ghost
              shape="circle"
              size="large"
              icon={<UserAddOutlined />}
            />
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<MessageOutlined />}
            />
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
                icon={<VideoCameraOutlined />}
              />
            </ConfigProvider>
          </Space>
          <Divider />
          <Flex className="section-container" vertical align="start">
            <Text strong className="section-header">
              User Information
            </Text>
            <Text strong className="user-information-title">
              Phone
            </Text>
            <Text type="secondary" className="user-information-text">
              {userDetails.phone}
            </Text>
            <Text strong className="user-information-title">
              Email
            </Text>
            <Text type="secondary" className="user-information-text">
              {userDetails.email}
            </Text>
          </Flex>
          <Divider />
          <Flex className="section-container" vertical align="start">
            <Text strong className="section-header">
              Group Participants
            </Text>
            {userGroups.map(function (data) {
              return <Group groupName={data.name} users={data.users} />;
            })}
          </Flex>
          <Divider />
          <Flex className="section-container" vertical align="start">
            <Text strong className="section-header">
              Media
            </Text>
            <Flex
              className="media-image-grid media-image"
              justify="flex-start"
              align="flex-start"
              wrap
              gap={10}
            >
              {myMessages.map(function (data) {
                if (isValidUrl(data.image)) {
                  return (
                    <Image
                      src={data.image}
                      fallback="../../assets/errorphoto.png"
                    />
                  );
                } else {
                  return [];
                }
              })}
            </Flex>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
