import axios from "axios";

export const fetchUsers = () => axios.get("http://goweb.eu.ngrok.io/users");
