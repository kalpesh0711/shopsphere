import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Empty cart state
  if (cartItems.length === 0) {
    return <h3>Your cart is empty 🛒</h3>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10
          }}
        >
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

