import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <Route component={Footer} />
    </div>
  );
}

export default App;
