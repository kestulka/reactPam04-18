import { useEffect, useReducer } from "react";
import { UsersReducer } from "../Reducers/reducer4";
import axios from "axios";
import { getUsers, sortAscending, sortDescending } from "../Actions/apiObjects";

const Names = () => {
  const [usersList, dispatchUsers] = useReducer(UsersReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatchUsers(getUsers(res.data)));
  }, []);

  const handleSortAscending = () => {
    dispatchUsers(sortAscending());
  };

  const handleSortDescending = () => {
    dispatchUsers(sortDescending());
  };

  return (
    <>
      <button onClick={handleSortAscending}>Sort by name (A-Z)</button>
      <button onClick={handleSortDescending}>Sort by name (Z-A)</button>

      <button onClick={handleSortAscendingZip}></button>
      <button onClick={handleSortDescendingZip}></button>
      <div>
        {usersList.map((user) => (
          <div key={user.id}>
            <p>
              {user.id} {user.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Names;
