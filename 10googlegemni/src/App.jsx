import { useState } from "react";
import "./App.css";
import Mainbar from "./components/main/Mainbar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;
