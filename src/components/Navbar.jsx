import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 15 }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>ShopSphere</h2>
      </Link>

      <Link to="/cart" style={{ textDecoration: "none" }}>
        <h4>🛒 Cart ({cartItems.length})</h4>
      </Link>
    </div>
  );
};

export default Navbar;
