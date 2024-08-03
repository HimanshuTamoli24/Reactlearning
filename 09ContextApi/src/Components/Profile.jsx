import React from "react";
import UserContext from "../Usercontext/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please log in</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
