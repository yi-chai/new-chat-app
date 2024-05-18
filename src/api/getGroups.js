import axios from "axios";

export default async function getGroups() {
  return axios
    .get("http://18.143.79.95/api/chatSystem/groups/list")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
