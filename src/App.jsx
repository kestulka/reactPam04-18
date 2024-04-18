import { useRef, useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import { Reducer } from "./Reducers/reducer";
import { Reducer2 } from "./Reducers/reducer2";
import { addSquare, deleteSquare } from "./Actions/actionObjects";

import CustomSquares from "./Components/CustomSquares";
import Names from "./Components/Names";

function App() {
  // const [square, dispatchSquare] = useReducer(Reducer, []);

  return (
    <>
      {/* <button onClick={() => dispatchSquare(addSquare())}>Add square</button>
      <button onClick={() => dispatchSquare(deleteSquare())}>
        Delete square
      </button>
      {square.map((square, index) => (
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
      ))} */}

      <CustomSquares />
      <Names />
    </>
  );
}

export default App;
