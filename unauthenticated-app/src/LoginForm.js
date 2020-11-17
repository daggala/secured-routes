import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getPrivateApp = async () => {
    try {
      //First we check if the server gives us a green light,
      //is the user authenticated? If yes (200) then...
      const res = await axios.get("/protected");
      if (res.status === 200) {
        //...then we redirect the user to /protected. Instead of using history
        //from react-router we use window.location.replace so that
        //the browser will make a HTTP call to be able to
        //fetch the index file for the private SPA.
        window.location.replace("http://localhost:5000/protected");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const auth = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("/authenticate", {
        auth: { username, password },
      });
      if (res.status === 200) {
        getPrivateApp();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <form onSubmit={auth}>
        <label>Username: </label>
        <br />
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password: </label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
