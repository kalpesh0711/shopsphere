import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice
  } = useContext(CartContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: 10,
                marginBottom: 10
              }}
            >
              <h4>{item.title}</h4>
              <p>Price: ₹ {item.price}</p>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <p>
                Subtotal: ₹ {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{ marginTop: 5 }}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h3>Total: ₹ {totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
