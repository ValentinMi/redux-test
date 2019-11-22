import * as usersConsts from "../consts/users.consts";

const initState = {
  list: [],
  currentUser: {},
  isLoading: undefined,
  error: null
};

const users = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case usersConsts.GET_USERS_PENDING:
      return { ...state, isLoading: true };
    case usersConsts.GET_USERS_FULFILLED:
      return { ...state, isLoading: false, list: payload.data.users };
    case usersConsts.GET_USERS_REJECTED:
      return { ...state, isLoading: false, error: payload.message };

    case usersConsts.ADD_USER_PENDING:
      return { ...state, isLoading: true };
    case usersConsts.ADD_USER_FULFILLED:
      return { ...state, isLoading: false };
    case usersConsts.ADD_USER_REJECTED:
      return { ...state, isLoading: false, error: payload.message };

    case usersConsts.DELETE_USER_PENDING:
      return { ...state, isLoading: true };
    case usersConsts.DELETE_USER_FULFILLED:
      return { ...state, isLoading: false };
    case usersConsts.DELETE_USER_REJECTED:
      return { ...state, isLoading: false, error: payload.message };

    default:
      return state;
  }
};

export default users;
