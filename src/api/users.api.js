import axios from "axios";

export const fetchUsers = () => axios.get("http://goweb.eu.ngrok.io/users");

export const postUser = user =>
  axios.post("http://goweb.eu.ngrok.io/users", user);

export const deleteUser = userId =>
  axios.delete(`http://goweb.eu.ngrok.io/users/${userId}`);
