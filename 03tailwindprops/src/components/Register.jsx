import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  // Handle form submission
  function handleRegister(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  // Initialize state with empty strings to avoid uncontrolled component warning
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ border: "1px solid", background: "yellow" }}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ border: "1px solid", background: "pink" }}
        />
        <button style={{ border: "1px solid" }} onClick={handleRegister}>
          Submit
        </button>
        <br />
        <button style={{ border: "10px solid green" }} onClick={handleRegister}>
          Submit me
        </button>
        <Link to="/about">Take me to register</Link>
      </form>
    </div>
  );
}

export default Register;
