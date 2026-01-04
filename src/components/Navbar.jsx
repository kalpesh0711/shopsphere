import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar= () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
  <h2>ShopSphere</h2>
  <h4>🛒 Cart ({cartItems.length})</h4>
</div>


    );
};

export default Navbar;