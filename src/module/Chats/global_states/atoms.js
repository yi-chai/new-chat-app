import { atom } from "recoil";

export const myIdNumberState = atom({
  key: "myIdNumberState",
  default: 5,
});

export const idNumberState = atom({
  key: "idNumberState",
  default: 1,
});

export const sendMessageState = atom({
  key: "sendMessageState",
  default: "",
});

export const showProfileState = atom({
  key: "showProfileState",
  default: false,
});

export const collapsedState = atom({
  key: "collapsedState",
  default: true,
});

export const groupListState = atom({
  key: "groupListState",
  default: [""],
});

export const chatListState = atom({
  key: "chatListState",
  default: [],
});
