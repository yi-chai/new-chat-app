import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import React from "react";
import ChatLayout from "../../module/Chats";
import PageNotFound from "../../shared/components/PageNotFound";

const { Content } = Layout;

export default function RoutedContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content>Home</Content>}></Route>
        <Route path="/workspace" element={<Content>Workspace</Content>}></Route>
        <Route path="/history" element={<Content>History</Content>}></Route>
        <Route path="/chats" element={<ChatLayout />}></Route>
        <Route
          path="/transactions"
          element={<Content>Transactions</Content>}
        ></Route>
        <Route path="/calendar" element={<Content>Calendar</Content>}></Route>
        <Route path="/comments" element={<Content>Comments</Content>}></Route>
        <Route path="/settings" element={<Content>Settings</Content>}></Route>
        <Route path="/profile" element={<Content>Profile</Content>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
