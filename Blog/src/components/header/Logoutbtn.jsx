import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/config";
import {logout} from "../../store/auspice"
function Logoutbtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className=" inline-block px-6 py-2  duration-200 hover:bg-blue-200 rounded-full">
      {" "}
      Logout
    </button>
  );
}

export default Logoutbtn;
