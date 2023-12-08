import Welcome from "./Welcome";
import BakeryList from "./Bakerylist";
import FavoriteItems from "./FavoriteItems";
import { useState } from "react";
import { useContext } from "react";
import { MatterContext } from "../context/MatterContext";

export default function Landingpge() {
  const [favorites, setFavorites] = useState([]);
  const { cartItems, setCartItems } = useContext(MatterContext);

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
  };

  return (
    <>
      <Welcome />
      <BakeryList addToFav={addToFavorite} addToCart={addToCart} />
      <FavoriteItems data={favorites} />
    </>
  );
}
