import React from "react";
import "./App.css";
import "./index.scss";
import { icons } from "./assets/icons";
import Routes from "./Routes/Index";

React.icons = icons;

function App() {
  return <Routes />;
}

export default App;
