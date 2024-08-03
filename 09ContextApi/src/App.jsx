import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Usercontext/UserContextProvider";
import Profile from "./Components/Profile";
import Loginpage from "./Components/Loginpage";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Profile />
      <Loginpage />
    </UserContextProvider>
  );
}

export default App;
