import axios from "axios";

export default async function getChats() {
  return axios
    .get("http://18.143.79.95/api/chatSystem/chat/list")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
