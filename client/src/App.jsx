import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { MatterContext } from "./context/MatterContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const data = { cartItems, setCartItems };

  return (
    <>
      <MatterContext.Provider value={data}>
        <Navbar />
        <Outlet />
      </MatterContext.Provider>
    </>
  );
}

export default App;
