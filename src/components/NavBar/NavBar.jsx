import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import Button from "../Button/Button";

import "./navBar.css";

export default function NavBar({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div>Bill Splitter App</div>
      <Button className="theme-button" primary onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </header>
  );
}
