import axios from "axios";

export default async function getUserDetails(userId) {
  return axios
    .get(`http://18.143.79.95/api/chatSystem/user/${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
      }
    });
}
