import * as usersConsts from "../consts/users.consts";
import { fetchUsers, postUser, deleteUser } from "../api/users.api";

export const getUsers = () => dispatch => {
  dispatch({ type: usersConsts.GET_USERS, payload: fetchUsers() });
};

export const addUser = user => async dispatch => {
  await dispatch({
    type: usersConsts.ADD_USER,
    payload: postUser(user)
  });

  // Refetch
  dispatch({ type: usersConsts.GET_USERS, payload: fetchUsers() });
};

export const removeUser = userId => async dispatch => {
  await dispatch({
    type: usersConsts.DELETE_USER,
    payload: deleteUser(userId)
  });

  // Refetch
  dispatch({ type: usersConsts.GET_USERS, payload: fetchUsers() });
};
