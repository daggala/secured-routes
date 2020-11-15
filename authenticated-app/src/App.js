import "./App.css";
import React from "react";
import axios from "axios";

const logout = async () => {
  try {
    await axios.get("/clear-cookie");
    window.location = "http://localhost:5000/";
  } catch (e) {
    console.log(e);
  }
};

function App() {
  return (
    <div className="App">
      Hello! You're signed in !
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
