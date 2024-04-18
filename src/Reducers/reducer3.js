import { ADD_SQUARE } from "../Constants/constants";

export const addCustomNumberOfSquaresReducer = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case ADD_SQUARE:
      for (let i = 0; i < action.payload; i++) {
        stateCopy.push(0);
        console.log(stateCopy);
      }
      break;

    default:
      break;
  }
  return stateCopy;
};
