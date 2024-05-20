import "../styles/MyProfile.css";
import { Drawer, Divider, Avatar, Typography, Flex } from "antd";

const { Title } = Typography;

export default function MyProfile({ userDetails, onClose, open }) {
  return (
    <Drawer title="Profile" onClose={onClose} open={open}>
      <Flex
        vertical
        align="center"
        justify="center"
        className="my-profile-container"
      >
        <Avatar size={200} src={userDetails.profileImage} />

        <Title level={2} className="my-profile-username">
          {userDetails.username}
        </Title>
        <Title level={3} type="secondary" className="my-profile-position">
          {userDetails.position}
        </Title>
        <Title level={3} className="my-profile-address">
          {userDetails.address}
        </Title>
        <Divider />
        <Title level={4} type="secondary">
          Phone
        </Title>
        <Title level={4}>{userDetails.phone}</Title>
        <Divider />
        <Title level={4} type="secondary">
          Email
        </Title>
        <Title level={4}>{userDetails.email}</Title>
        <Divider />
      </Flex>
    </Drawer>
  );
}
