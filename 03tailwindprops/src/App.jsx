import React from "react";
import About from "./screens/About";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlis from "./screens/Userlis";

import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/about",
    element: <div>about us!</div>,
  }
]);
function App() {
  return (
    <>
      <h1>hello</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
