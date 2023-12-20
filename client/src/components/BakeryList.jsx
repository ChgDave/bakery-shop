import BakeryItem from "./Bakeryitem";
import { useQuery } from "@apollo/client";
import { QUERY_BAKERYITEMS } from "../utils/queries";

function BakeryList({ addToFav, addToCart }) {
  const { loading, data } = useQuery(QUERY_BAKERYITEMS);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const list = data.bakeryItems.map((bakery) => {
    return (
      <BakeryItem
        key={bakery._id}
        data={bakery}
        addToFav={addToFav}
        addToCart={addToCart}
      />
    );
  });

  return <div className="container">{list}</div>;
}

export default BakeryList;
