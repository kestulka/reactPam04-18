import { ADD_SQUARE } from "../Constants/constants";

export const Reducer = (state, action) => {
  let stateCopy = [...state];
  switch (action.type) {
    case ADD_SQUARE:
      stateCopy.push("0");
      break;
    default:
      break;
  }
  return stateCopy;
};
