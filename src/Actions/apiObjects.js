import { GET_USERS } from "../Constants/apiConstants";

export const getUsers = (usersList) => {
  return {
    type: GET_USERS,
    payload: usersList,
  };
};
