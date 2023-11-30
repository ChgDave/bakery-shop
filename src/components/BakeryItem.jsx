import "../App.css";
import priceConversion from "../../util/helpers";
import { useState } from "react";

function BakeryItem({ data, addToFav }) {
  const [buttonText, setButtonText] = useState("Add to Favorites");
  const buttonState = () => {
    console.log("botton clicked");
    if (buttonText === "Add to Favorites") {
      setButtonText("Remove From Favorites");
    } else {
      setButtonText("Add to Favorites");
    }
  };
  return (
    <div className="card">
      <img src={data.img}></img>
      <h4>{data.name}</h4>
      <p>{priceConversion(data.cost)}</p>
      <button
        onClick={() => {
          addToFav(data.name);
          buttonState();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default BakeryItem;
