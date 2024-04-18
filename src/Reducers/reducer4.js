import { GET_USERS, SORT_BY_NAME_ASCENDING, SORT_BY_NAME_DESCENDING } from "../Constants/apiConstants";

export const UsersReducer = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case GET_USERS:
      stateCopy = action.payload;
      break;
        
      case SORT_BY_NAME_ASCENDING

    default:
      break;
  }
  return stateCopy;
};
