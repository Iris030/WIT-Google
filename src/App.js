import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Form.jsx";
import Posts from "./Posts.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <Router>
      <Route path="/form" component={Form} />
      <Route path="/posts/:type" component={Posts} />
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
