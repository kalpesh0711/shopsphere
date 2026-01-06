import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Page</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
