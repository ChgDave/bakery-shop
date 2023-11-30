import { productData } from "../../util/data";
import BakeryItem from "./Bakeryitem";
import "../App.css";

function BakeryList() {
  const list = productData.map((bakery) => {
    return <BakeryItem key={bakery.id} data={bakery} />;
  });

  return <div className="container">{list}</div>;
}

export default BakeryList;
