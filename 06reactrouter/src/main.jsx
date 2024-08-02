import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./index.css";
import User from "./Components/User/User.jsx";
// Define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // Use App component here
//     children: [
//       {
//         path: "",
//         element: <Home />, // Render Home at the root path
//       },
//       {
//         path: "about",
//         element: <About />, // Render About at /about path
//       },
//       {
//         path: "contactus",
//         element: <Contact />, // Render Contact at /contactus path
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/User/:id" element={<User />} />
      <Route />
    </Route>
  )
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provide the router */}
  </React.StrictMode>
);
