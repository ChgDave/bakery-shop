import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import BakeryList from "./components/Bakerylist";
import FavoriteItems from "./components/FavoriteItems";

function App() {
  const [favorites, setFavorites] = useState([]);
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
  return (
    <>
      <Welcome />
      <BakeryList addToFav={addToFavorite} />
      <FavoriteItems data={favorites} />
    </>
  );
}

export default App;
