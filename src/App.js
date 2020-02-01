import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Routes from "./routes";

import "./App.css";
import Home from "./containers/home";

function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <Route component={Home} />
      <Route component={Footer} />
    </div>
  );
}

export default App;
