import Welcome from "./Welcome";
import BakeryList from "./Bakerylist";
import FavoriteItems from "./FavoriteItems";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MatterContext } from "../context/MatterContext";
import useLocalStorage from "../hooks/localStorage";

export default function Landingpge() {
  const [favorites, setFavorites] = useState([]);
  const { cartItems, setCartItems } = useContext(MatterContext);
  const [cartLocal, setCartLocal] = useLocalStorage("Cart Items", "");

  const addToFavorite = (item) => {
    if (!favorites.includes(item)) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      console.log(updatedFavorites);
    } else {
      // remove item from the list
      favorites.splice(favorites.indexOf(item), 1);
      const updatedFavorites = [...favorites];
      setFavorites(updatedFavorites);
      console.log(updatedFavorites);
    }
  };

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    setCartLocal(newCartItems);
  };

  useEffect(() => {
    setCartItems(cartLocal);
  });
  return (
    <>
      <Welcome />
      <BakeryList addToFav={addToFavorite} addToCart={addToCart} />
      <FavoriteItems data={favorites} />
    </>
  );
}
