import "../styles/Chat.css";

import React from "react";
import { useRecoilValue } from "recoil";
import moment from "moment";
import { Card, Flex, Typography, Avatar, Space, Image } from "antd";
import { idNumberState, myIdNumberState } from "../global_states/atoms";

const { Text } = Typography;

export default function Chat({ chatList, userList }) {
  const currentId = useRecoilValue(idNumberState);
  const myId = useRecoilValue(myIdNumberState);

  const userDetails = userList?.filter(function (user) {
    return user.id === currentId;
  })[0];

  const myUserDetails = userList?.filter(function (user) {
    return user.id === myId;
  })[0];

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  const myMessages = chatList
    ?.filter(({ fromUser, toUser }) => fromUser === myId || toUser === myId)
    .reverse()
    ?.filter(
      ({ fromUser, toUser }) => fromUser === currentId || toUser === currentId
    );

  return (
    <div className="chat-box">
      {myMessages.map(function (data) {
        let textMessageString = "";

        const sentByThem = data.fromUser === myId;

        const textMessage = JSON.stringify(data.message);
        if (textMessage) {
          textMessageString = textMessage.replace(/^"(.*)"$/, "$1");
        }

        return (
          <div className={sentByThem ? "message from-me" : "message from-them"}>
            <Avatar
              className="chat-avatar"
              size="large"
              src={
                sentByThem
                  ? myUserDetails?.profileImage
                  : userDetails?.profileImage
              }
             />
            <Flex align={sentByThem ? "end" : "start"} vertical gap={10}>
              <Space>
                <Text strong className="message-username">
                  {sentByThem ? myUserDetails?.username : userDetails?.username}
                </Text>
                <Text type="secondary" className="message-timestamp">
                  {moment(data.timestamp).calendar()}
                </Text>
              </Space>
              <Card
                className={sentByThem ? "bubble from-me" : "bubble from-them"}
              >
                {textMessageString}
              </Card>
              {isValidUrl(data.image) ? (
                <Image
                  id="chat-image"
                  src={data.image}
                  fallback="../../shared/assets/default-fallback-image.png"
                />
              ) : null}
            </Flex>
          </div>
        );
      })}
      <Text type="secondary" className="start-marker-text">
        This is the beginning of your chat with {userDetails?.username}.
      </Text>
    </div>
  );
}
