import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import BakeryList from "./components/Bakerylist";

function App() {
  return (
    <>
      <Welcome />
      <BakeryList />
    </>
  );
}

export default App;
