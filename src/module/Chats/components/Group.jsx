import "../styles/Group.css";
import { Avatar, Flex } from "antd";
import randomColor from "../../../util/common_functions/randomColor";
import getUsers from "../../../api/getUsers";

const userList = await getUsers();

export default function Group({ profileImage = null, isSelected, ...props }) {
  const groupUsers = props.users;
  const groupColor = randomColor(props.groupName.length);

  return (
    <>
      <Flex gap={12} className={isSelected ? "group active" : "group"}>
        <Avatar
          shape="square"
          size="large"
          style={{
            backgroundColor: groupColor[0],
            color: groupColor[1],
          }}
          className="group-avatar"
        >
          {props.groupName[0]}
        </Avatar>
        <Flex
          justify="space-between"
          align="center"
          className="group-container"
        >
          <p>{props.groupName}</p>
          <Avatar.Group
            maxCount={1}
            maxStyle={{
              color: "#000",
              backgroundColor: "rgb(233, 237, 241)",
            }}
            className="user-group"
          >
            {groupUsers.map(function (data) {
              return <Avatar src={userList[data - 1]?.profileImage}></Avatar>;
            })}
          </Avatar.Group>
        </Flex>
      </Flex>
    </>
  );
}
