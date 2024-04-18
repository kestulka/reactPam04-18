import { useState, useReducer } from "react";
import { addCustomNumberOfSquares } from "../Actions/actionObjects";
import { addCustomNumberOfSquaresReducer } from "../Reducers/reducer3";

const CustomSquares = () => {
  const [number, setNumber] = useState(1);

  const [squares, dispatchSquares] = useReducer(
    addCustomNumberOfSquaresReducer,
    []
  );

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatchSquares(addCustomNumberOfSquares(number))}>
        Add squares
      </button>
      {console.log(squares)}

      {squares.map((square, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "purple",
            border: "2px solid black",
            margin: "10px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default CustomSquares;
