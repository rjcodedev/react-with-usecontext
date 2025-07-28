import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex flex-col text-black dark:text-white gap-4">
      <h1 className="text-red-400 dark:text-sky-400 text-2xl font-bold text-center p-4">
        Login Page
      </h1>
      <input
        type="text"
        placeholder="username"
        className="border border-black rounded p-2 dark:border-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        className="border border-black rounded p-2 dark:border-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-red-400 dark:bg-sky-400 text-white text-2xl font-bold text-center p-4 rounded-lg"
        onClick={handleSubmit}
      >
        submit
      </button>

    </div>
  );
};

export default Login;
