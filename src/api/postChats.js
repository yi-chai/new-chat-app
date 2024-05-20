import axios from "axios";

export default function getUsers(idFrom, idTo, postMessage) {
  return axios
    .post("http://18.143.79.95/api/chatSystem/chat/add", {
      fromUser: idFrom,
      toUser: idTo,
      message: postMessage.trim(),
    })
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.error({ error });
    });
}
