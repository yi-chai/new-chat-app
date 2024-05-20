import "../styles/ContactList.css";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import moment from "moment";
import { Flex, Input, Button } from "antd";
import Contact from "./Contact";
import { SearchOutlined } from "@ant-design/icons";
import getUsers from "../../../api/getUsers";
import getChats from "../../../api/getChats";
import { myIdNumberState } from "../global_states/atoms";

const userList = await getUsers();
const chatList = await getChats();

export default function ContactList() {
  const myId = useRecoilValue(myIdNumberState);
  const [search, setSearch] = useState("");
  const [filteredUserList, setFilteredUserList] = useState([]);

  useEffect(() => {
    setFilteredUserList(() => {
      if (search.length === 0) {
        return userList;
      } else {
        return userList.filter((data) => {
          return data.username
            .toLowerCase()
            .match(new RegExp(search.toLowerCase()));
        });
      }
    });
  }, [search, userList]);

  return (
    <>
      <Input
        prefix={<SearchOutlined className="search-icon" />}
        onChange={(e) => setSearch(e.target.value)}
        size="large"
        placeholder="Search Contact"
        className="search-contacts"
      />
      <div className="contacts-container">
        {filteredUserList
          .filter(({ id }) => id !== myId)
          .map(function (data) {
            let userChatList = chatList.filter(
              ({ fromUser, toUser }) =>
                fromUser === data.id || toUser === data.id
            );

            const lastMessage = userChatList[userChatList.length - 1];

            let lastText = JSON.stringify(lastMessage.message);

            if (lastText) {
              lastText = lastText.replace(/^"(.*)"$/, "$1");
            }

            return (
              <Contact
                profileImage={data.profileImage}
                username={data.username}
                lastMessage={lastText}
                date={moment(lastMessage?.timestamp).format("MMM DD YYYY")}
                time={moment(lastMessage?.timestamp).format("LT")}
                idNumber={data.id}
              />
            );
          })}
      </div>
      <Flex
        className="contacts-button-container"
        gap="12px"
        justify="space-around"
      >
        <Button type="primary" size="large" block className="meeting-button">
          Meeting
        </Button>
        <Button type="default" size="large" block className="schedule-button">
          Schedule
        </Button>
      </Flex>
    </>
  );
}
