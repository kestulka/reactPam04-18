import { DELETE_SQUARE } from "../Constants/constants";

export const Reducer2 = (state, action) => {
  let stateCopy = [...state];
  switch (action.type) {
    case DELETE_SQUARE:
      stateCopy.pop();
      break;
    default:
      break;
  }
  return stateCopy;
};
