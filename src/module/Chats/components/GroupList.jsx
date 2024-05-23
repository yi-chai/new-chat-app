import "../styles/GroupList.css";

import { Button, Flex, Typography } from "antd";
import { PiPlus } from "react-icons/pi";
import Group from "./Group";
import getGroups from "../../../api/getGroups";
import { useState, useEffect } from "react";

const { Title } = Typography;

export default function GroupList() {
  const [groupList, setGroupList] = useState([]);

  async function getTheGroups() {
    const loadGroups = await getGroups();
    setGroupList(loadGroups);
  }

  useEffect(() => {
    getTheGroups();
  }, []);
  return (
    <>
      <Flex align="center" justify="space-between" className="group-box-title">
        <Title level={4} className="group-box-title-text">
          Groups ({groupList?.length})
        </Title>
        <Button size="small" type="text">
          <PiPlus size="15" />
        </Button>
      </Flex>
      <div className="group-box">
        <Flex vertical>
          {groupList?.map(function (data) {
            return <Group groupName={data.name} users={data.users} />;
          })}
        </Flex>
      </div>
    </>
  );
}
