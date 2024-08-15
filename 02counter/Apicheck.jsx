import React, { useEffect, useState } from "react";

function Todo() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        let extractData = data.posts.map(({ title, id }) => {
          return { title, id };
        });
        setData(extractData);
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error in fetching:", error);
        setLoad(false);
      })
      .finally(() => {
        console.log("fetching done");
      });
  }, []);

  return (
    <>
      {load ? (
        <p>loading</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              Title:{item.title}
              <br />
              Id:{item.id}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Todo;
