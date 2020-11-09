import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Public from "./Public";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/protected">
            <Protected />
          </Route>
          <Route path="/">
            <Public />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
