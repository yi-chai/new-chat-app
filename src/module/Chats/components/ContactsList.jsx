import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "../Contact/Contact";
import "../styles/ContactsList.css";
import moment from "moment";
import { Input, ConfigProvider } from "antd";
import { PiMagnifyingGlass } from "react-icons/pi";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  idNumberState,
  myIdNumberState,
  postState,
  collapsedState,
} from "../../atoms.js";
import { useMediaQuery } from "react-responsive";

export default function ContactList() {
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [search, setSearch] = useState("");
  const [idNumber, setIdNumber] = useRecoilState(idNumberState);
  const myId = useRecoilValue(myIdNumberState);
  const messageString = useRecoilValue(postState);
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);
  const isSurfaceDuo = useMediaQuery({ query: "(max-width: 540px)" });

  useEffect(() => {
    axios.get("http://18.143.79.95/api/chatSystem/users/list").then((res) => {
      setFilteredUserList([...res.data]);
      setUserList([...res.data]);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://18.143.79.95/api/chatSystem/chat/list")
      .then((res) => setMessageList([...res.data]));
  }, [messageString]);

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

  const myMessages = messageList.filter(
    ({ fromUser, toUser }) => fromUser === myId || toUser === myId
  );

  function handleClick(clickedButton) {
    if (isSurfaceDuo) {
      setCollapsed(true);
    }

    setIdNumber(clickedButton);
    return idNumber;
  }

  return (
    <>
      <div id="search-bar">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: "transparent",
                hoverBorderColor: "transparent",
                activeBg: "rgb(242, 242, 242)",
                addonBg: "rgb(242, 242, 242)",
                hoverBg: "rgb(242, 242, 242)",
                colorBgContainer: "rgb(242, 242, 242)",
                colorTextPlaceholder: "rgb(123, 123, 123)",
                colorBorder: "transparent",
                activeShadow: "0 0 0",
                paddingBlock: "1.5vh",
              },
            },
          }}
        >
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Contact"
            prefix={
              <PiMagnifyingGlass
                style={{
                  color: "rgb(123, 123, 123)",
                }}
              />
            }
          />
        </ConfigProvider>
      </div>
      <div id="contacts" className="container">
        {filteredUserList
          .filter(({ id }) => id !== myId)
          .map(function (data) {
            let newMessageList = myMessages.filter(
              ({ fromUser, toUser }) =>
                fromUser === data.id || toUser === data.id
            );
            let lastMessage = newMessageList[newMessageList.length - 1];

            if (lastMessage?.timestamp.toString().length < 13) {
              let numberOfMultiplies =
                13 - lastMessage.timestamp.toString().length;
              for (var x = 0; x < numberOfMultiplies; x++) {
                lastMessage.timestamp *= 10;
              }
            }

            const date = moment(lastMessage?.timestamp).format("MMM DD YYYY");
            const time = moment(lastMessage?.timestamp).format("LT");

            const lastText = JSON.stringify(lastMessage?.message);
            let lastTextString = "";

            if (lastText) {
              lastTextString = lastText.replace(/^"(.*)"$/, "$1");
            }

            return (
              <Contact
                profileImage={data.profileImage}
                username={data.username}
                lastMessage={lastTextString}
                date={date}
                time={time}
                // isSelected={clickedTopic === data.id}
                onClick={() => {
                  handleClick(data.id);
                }}
              />
            );
          })}
      </div>
    </>
  );
}
