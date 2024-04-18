import { ADD_SQUARE, DELETE_SQUARE } from "../Constants/constants";

export const addSquare = () => {
  return {
    type: ADD_SQUARE,
  };
};

export const deleteSquare = () => {
  return {
    type: DELETE_SQUARE,
  };
};

export const addCustomNumberOfSquares = (inputValue) => {
  // suziureti naming kad nebutu toks pat kaip reduceryje
  return {
    type: ADD_SQUARE,
    payload: inputValue,
  };
};
