import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart <ShoppingCartOutlined />
      </Link>
      <Link to="/store-info">Store Info</Link>
    </nav>
  );
}
