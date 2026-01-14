import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const storedAddress = localStorage.getItem("address");
  const address = storedAddress ? JSON.parse(storedAddress) : null;

  const placeOrder = () => {
    clearCart();
    localStorage.removeItem("address");
    localStorage.setItem("orderPlaced", "true");
    navigate("/success");
  };

  if (cartItems.length === 0) {
    return <h3>No items to checkout</h3>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      {address && (
        <div style={{ marginBottom: 20 }}>
          <h3>Shipping Address</h3>
          <p><strong>Name:</strong> {address.name}</p>
          <p><strong>Phone:</strong> {address.phone}</p>
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>Street:</strong> {address.street}</p>
        </div>
      )}

      <hr />

      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} × {item.quantity}</p>
          <p>₹ {item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total: ₹ {totalPrice}</h3>

      <button onClick={placeOrder} style={{ marginTop: 15 }}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
