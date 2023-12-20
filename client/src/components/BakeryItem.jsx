import priceConversion from "../../util/helpers";
import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";

function BakeryItem({ data, addToFav, addToCart }) {
  const [buttonText, setButtonText] = useState("Add to Favorites");

  const buttonState = () => {
    console.log("botton clicked");
    if (buttonText === "Add to Favorites") {
      setButtonText("Remove From Favs");
    } else {
      setButtonText("Add to Favorites");
    }
  };

  const handleFavClick = () => {
    addToFav(data.name);
    buttonState();
  };

  const handleCartClick = () => {
    addToCart(data);
    setCartLocal();
  };

  const backgroundColor =
    data.cost < 200 ? { background: "pink" } : { background: "lightgreen" };

  return (
    <div className="card" style={backgroundColor}>
      <img src={data.img}></img>
      <Link to={`/bakery-item/${data.id}`}>
        <h4>{data.name}</h4>
      </Link>

      <p>{priceConversion(data.cost)}</p>
      <Button
        className="button"
        type="primary"
        onClick={() =>
          // write a handle click function
          handleFavClick()
        }
      >
        {buttonText}
      </Button>
      <Button
        className="button"
        type="primary"
        icon={<DownloadOutlined />}
        onClick={() => handleCartClick()}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default BakeryItem;
