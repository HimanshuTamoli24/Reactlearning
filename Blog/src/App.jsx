import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auspice.js";
import authService from "./appWrite/auth";
import { Header, Footer } from './components';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return !loading? (
    <div className="min-h-screen flex flex-wrap  content-between bg-blue-900 ">
      <div className=" w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ): null;
}

export default App;
