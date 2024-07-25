import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz App</h2>
      </header>
    </div>
  );
}
