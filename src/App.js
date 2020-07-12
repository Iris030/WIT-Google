import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from "./Form.jsx";
import PostContainer from "./PostContainer";
import Home from "./Home.jsx";
import Bar from "./Bar";

function App() {
  return (
    <div>
      <Bar />
      <Router>
        <Route path="/form" component={Form} />
        <Route path="/posts/:type" component={PostContainer} />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
