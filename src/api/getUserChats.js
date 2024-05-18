import axios from "axios";

export default async function getUserChats(userId) {
  return await axios
    .get(`http://18.143.79.95/api/chatSystem/chatByUserId/${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
