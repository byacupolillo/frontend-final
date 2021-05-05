import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToFeed } from "../routes/coordinator"

export const signup = (body,clear, history) => {
  axios
    .post(`${baseUrl}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      clear()
      goToFeed(history);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const login = (body,clear,history) => {
  axios.post(`${baseUrl}/login`, body)
  .then((res) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToFeed(history)
  })
  .catch((err) => alert(err.response.data.message))
}