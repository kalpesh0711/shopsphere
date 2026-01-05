import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
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
