import "../App.css";
import priceConversion from "../../util/helpers";

function BakeryItem({ data }) {
  const handleClick = () => {
    console.log("Button Clicked!!");
  };

  return (
    <div className="card">
      <img src={data.img}></img>
      <h4>{data.name}</h4>
      <p>{priceConversion(data.cost)}</p>
      <button onClick={handleClick}>Add to Favorites</button>
    </div>
  );
}

export default BakeryItem;
