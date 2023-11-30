import { productData } from "../../util/data";
import BakeryItem from "./Bakeryitem";
import "../App.css";

function BakeryList({ addToFav }) {
  const list = productData.map((bakery) => {
    return <BakeryItem key={bakery.id} data={bakery} addToFav={addToFav} />;
  });

  return <div className="container">{list}</div>;
}

export default BakeryList;
