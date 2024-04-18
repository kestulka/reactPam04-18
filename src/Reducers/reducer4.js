import { GET_USERS } from "../Constants/apiConstants";

export const UsersReducer = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case GET_USERS:
      stateCopy = action.payload;
      break;
    default:
      break;
  }
  return stateCopy;
};
