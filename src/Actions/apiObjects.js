import {
  GET_USERS,
  SORT_BY_NAME_ASCENDING,
  SORT_BY_NAME_DESCENDING,
} from "../Constants/apiConstants";

export const getUsers = (usersList) => {
  return {
    type: GET_USERS,
    payload: usersList,
  };
};
export const sortAscending = () => {
  return {
    type: SORT_BY_NAME_ASCENDING,
  };
};
export const sortDescending = () => {
  return {
    type: SORT_BY_NAME_DESCENDING,
  };
};
export const sortByZipAscending = () => {
  return {
    type: SORT_BY_ZIP_ASCENDING,
  };
};
export const sortByZipDescending = () => {
  return {
    type: SORT_BY_ZIP_DESCENDING,
  };
};
