import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const auth = async () => {
    try {
      const res = await axios.get("/authenticate", {
        auth: { username, password },
      });
      console.log("res ", res);
      if (res.status === 200) {
        //we're using history here to relocate the user, but without
        //making a new HTTP call
        history.push("/protected");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div>
        <label>Username: </label>
        <br />
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password: </label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={auth}>Login</button>
      </div>
    </div>
  );
}

export default Login;
