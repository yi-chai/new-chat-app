import React, { useState } from "react";
import { Card, Flex, Input, Button } from "antd";
import "../styles/ContactList.css";
import { SearchOutlined } from "@ant-design/icons";
import Contact from "./Contact";
import getUsers from "../../../api/getUsers";
import getUserChats from "../../../api/getUserChats";
import moment from "moment";
import { myIdNumberState, idNumberState } from "../global_states/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

const userList = await getUsers();

export default function ContactList() {
  const myId = useRecoilValue(myIdNumberState);
  const [idNumber, setIdNumber] = useRecoilState(idNumberState);

  function handleClick(clickedButton) {
    setIdNumber(clickedButton);
    return idNumber;
  }

  return (
    <>
      <Input
        prefix={
          <SearchOutlined
            style={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.4)" }}
          />
        }
        size="large"
        placeholder="Search contacts"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          margin: "12px",
          maxWidth: "calc(100% - 24px)",
          height: "50px",
        }}
      />
      <div
        style={{
          backgroundColor: "transparent",
          minHeight: "calc(100% - 96px)",
          maxHeight: "calc(100% - 96px)",
          overflowY: "scroll",
        }}
      >
        {userList
          .filter(({ id }) => id !== myId)
          .map(function (data) {
            const chatList = getUserChats(data.id);
            console.log(chatList);

            return (
              <Contact
                profileImage={data.profileImage}
                username={data.username}
                lastMessage={chatList[0].message}
                date=""
                time=""
                onClick={() => {
                  handleClick(data.id);
                }}
              />
            );
          })}
        <Contact
          username="username"
          lastMessage="text text text text text"
          date="7 May 2020"
          time="3:00 PM"
          profileImage="https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"
        />
        <Contact
          username="misha"
          lastMessage="text text text text text"
          date="7 May 2020"
          time="3:00 PM"
          isSelected={true}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Contact
          username="polly"
          lastMessage="text text text text text"
          date="7 May 2020"
          time="3:00 PM"
        />
        <Contact
          username="zane"
          lastMessage="text text text text text"
          date="7 May 2020"
          time="3:00 PM"
        />
      </div>
      <Flex style={{ padding: "12px" }} gap="12px" justify="space-around">
        <Button type="primary" size="large" block>
          Meeting
        </Button>
        <Button type="default" size="large" block>
          Schedule
        </Button>
      </Flex>
    </>
  );
}
