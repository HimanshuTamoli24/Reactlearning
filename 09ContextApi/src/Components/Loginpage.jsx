import React, { useState, useContext } from "react";
import UserContext from "../Usercontext/UserContext";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setUser({ username, password });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Loginpage;
