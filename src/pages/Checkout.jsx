import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const placeOrder = () => {
    clearCart();
    navigate("/success");
  };

  if (cartItems.length === 0) {
    return <h3>No items to checkout</h3>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <p>
            {item.title} × {item.quantity}
          </p>
          <p>₹ {item.price * item.quantity}</p>
        </div>
      ))}

      <hr />
      <h3>Total: ₹ {totalPrice}</h3>

      <button onClick={placeOrder} style={{ marginTop: 10 }}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
