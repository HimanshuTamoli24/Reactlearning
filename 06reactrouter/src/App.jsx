import React from "react";
import { Outlet } from "react-router-dom"; // Use Outlet to render child routes
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
