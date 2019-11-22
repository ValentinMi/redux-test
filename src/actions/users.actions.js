import * as usersConsts from "../consts/users.consts";
import { fetchUsers } from "../api/users.api";

export const getUsers = () => dispatch => {
  dispatch({ type: usersConsts.GET_USERS, payload: fetchUsers() });
};
