import axios from "axios";

export default async function getUsers() {
  return axios
    .get("http://18.143.79.95/api/chatSystem/users/list")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
