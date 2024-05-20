import "../styles/GroupList.css";

import { Button, Flex, Typography } from "antd";
import { PiPlus } from "react-icons/pi";
import Group from "./Group";
import getGroups from "../../../api/getGroups";

const { Title } = Typography;
const myGroupList = await getGroups();

export default function GroupList() {
  return (
    <>
      <Flex align="center" justify="space-between" className="group-box-title">
        <Title level={4} className="group-box-title-text">
          Groups ({myGroupList.length})
        </Title>
        <Button size="small" type="text">
          <PiPlus size="15" />
        </Button>
      </Flex>
      <div className="group-box">
        <Flex vertical>
          {myGroupList.map(function (data) {
            return <Group groupName={data.name} users={data.users} />;
          })}
        </Flex>
      </div>
    </>
  );
}
