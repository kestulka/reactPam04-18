import { useEffect, useReducer } from "react";
import { UsersReducer } from "../Reducers/reducer4";
import axios from "axios";
import { getUsers } from "../Actions/apiObjects";

const Names = () => {
  const [usersList, dispatchUsers] = useReducer(UsersReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatchUsers(getUsers(res.data)));
  }, []);

  return (
    <>
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
