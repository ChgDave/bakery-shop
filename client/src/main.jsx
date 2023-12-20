import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Landingpge from "./components/Landingpge.jsx";
import Storeinfo from "./components/Storeinfo.jsx";
import SingleBakeryitem from "./components/SingleBakeryitem.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landingpge />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/store-info",
        element: <Storeinfo />,
      },
      {
        path: "bakery-item/:bakeryItemId",
        element: <SingleBakeryitem />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
