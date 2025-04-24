import { useState, useEffect } from "react";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("Users updated:", users);
    setUsers((users) => users.concat({ id: 4, name: "David" }, {id: 5, name: "JS"}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // массив зависимостей оставляем пустым, т.к. в противном случае будет бесконечный рендер

  const filteredUsers =
    filter === "" ? users : users.filter((user) => user.name === filter);

  return (
    <div>
      <h4>"Список пользователей" </h4>
      <div>
        <input
          type="text"
          placeholder="Фильтр по имени"
          value={filter}
          onChange={(evt) => setFilter(evt.target.value)}
        />
        <ul>
          <Users users={filteredUsers} />
        </ul>
      </div>
    </div>
  );
};

export default App;
