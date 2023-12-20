import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./Navbar.scss";
import { useContext } from "react";
import { MatterContext } from "../../context/MatterContext";
import Auth from "../../utils/auth";

export default function Navbar() {
  const { cartItems } = useContext(MatterContext);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const itemsCount = cartItems.length;

  return (
    <nav className="navbar">
      <div>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <Badge
            count={itemsCount}
            className="ant-badge-count nav-item"
            size="small"
          >
            Cart <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
      <div>
        <Link className="nav-item" to="/store-info">
          Store Info
        </Link>
      </div>

      <div>
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="nav-item" to="/signup">
              Signup
            </Link>
            <Link className="nav-item" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
