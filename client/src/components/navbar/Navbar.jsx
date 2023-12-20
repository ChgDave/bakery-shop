import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./Navbar.scss";
import { useContext } from "react";
import { MatterContext } from "../../context/MatterContext";

export default function Navbar() {
  const { cartItems } = useContext(MatterContext);

  const itemsCount = cartItems.length;

  return (
    <nav className="navbar">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link to="/cart">
        <Badge
          count={itemsCount}
          className="ant-badge-count nav-item"
          size="small"
        >
          Cart <ShoppingCartOutlined />
        </Badge>
      </Link>
      <Link className="nav-item" to="/store-info">
        Store Info
      </Link>
      <Link className="nav-item" to="/signup">
        Signup
      </Link>
    </nav>
  );
}
