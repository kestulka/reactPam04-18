import { useEffect } from "react";
import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const allUsers = useRef([]);

  useEffect(() => {
    axios;
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      allUsers.current = res.data.data; // visi
      // atfiltruoti
      setUsersList(
        allUsers.current.filter(
          (user) =>
            user.first_name === "George" || user.first_name === "Lindsay"
        )
      );
    });
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setUsersList(allUsers.current)}>Show all</button>
        {usersList.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
