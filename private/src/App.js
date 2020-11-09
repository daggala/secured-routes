import "./App.css";
import React from "react";
import axios from "axios";

function Private(props) {
  const deleteCookie = async () => {
    try {
      await axios.get("/clear-cookie");
      window.location = "http://localhost:5000/";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={deleteCookie}>Logout</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      Hello! You're signed in !
      <Private />
    </div>
  );
}

export default App;
