import React, { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

function MyEffect() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);
    console.log(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h4>Github Users</h4>
      <ul className="list">
        {user.map((data) => {
          const { id, login, avatar_url, html_url } = data;

          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div className="names">
                <p>{login}</p>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MyEffect;
