import priceConversion from "../utils/helpers";
// import { productData } from "../utils/data";
import { SmileOutlined } from "@ant-design/icons";
import { useParams, Link } from "react-router-dom";
import { QUERY_ONE_BAKERYITEM } from "../utils/queries";
import { useQuery } from "@apollo/client";

export default function SingleBakeryitem() {
  const { bakeryItemId } = useParams();
  console.log(bakeryItemId);
  const { loading, data } = useQuery(QUERY_ONE_BAKERYITEM, {
    variables: { bakeryItemId: bakeryItemId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  const item = data.bakeryItem;
  console.log(item);
  const backgroundColor =
    item.cost < 200 ? { background: "pink" } : { background: "lightgreen" };
  return (
    <div className="card" style={backgroundColor}>
      <img src={item.img}></img>
      <h4>{item.name}</h4>
      <p>{priceConversion(item.cost)}</p>
      <div>
        <SmileOutlined style={{ fontSize: "30px", color: "yellow" }} />
      </div>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Link to="/">← Go Back</Link>
      </footer>
    </div>
  );
}
