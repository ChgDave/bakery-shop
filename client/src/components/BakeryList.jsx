import { productData } from "../utils/data";
import BakeryItem from "./Bakeryitem";

function BakeryList({ addToFav, addToCart }) {
  const list = productData.map((bakery) => {
    return (
      <BakeryItem
        key={bakery.id}
        data={bakery}
        addToFav={addToFav}
        addToCart={addToCart}
      />
    );
  });

  return <div className="container">{list}</div>;
}

export default BakeryList;
