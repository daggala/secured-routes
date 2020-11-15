import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getPrivateApp = async () => {
    try {
      const res = await axios.get("/protected");
      if (res.status === 200) {
        //Even though we're already at /protected path
        //we have to reload in order to make a HTTP call
        //to be able to fetch the index file for the private SPA.
        window.location.reload();
      } else {
        window.location.href = "http://localhost:5000/";
      }
    } catch (e) {
      console.log(e);
    }
  };

  const auth = async (e) => {
    console.log("auth ", auth);
    e.preventDefault();
    console.log("user ", username, "password ", password);
    try {
      const res = await axios.get("/authenticate", {
        auth: { username, password },
      });

      console.log("res ", res);
      if (res.status === 200) {
        //we're using history here to relocate the user, but without
        //making a new HTTP call
        window.location.href = "http://localhost:5000/protected";
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
