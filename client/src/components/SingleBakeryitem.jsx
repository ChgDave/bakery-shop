import priceConversion from "../../util/helpers";
import { productData } from "../../util/data";
import { SmileOutlined } from "@ant-design/icons";
import { useParams, Link } from "react-router-dom";

export default function SingleBakeryitem() {
  const { id } = useParams();
  const item = productData[id];

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
