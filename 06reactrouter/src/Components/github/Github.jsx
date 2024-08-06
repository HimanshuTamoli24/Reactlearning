import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/himanshutamoli24`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-300 text-slate-100 ">
        Github name: {data.login}
      </div>
      <div className="text-center m-4 bg-gray-300 text-slate-100 ">
        Github followers: {data.followers}
      </div>
    </>
  );
}

export default Github;
