import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const qtyBtnStyle = {
  width: 32,
  height: 32,
  borderRadius: 4,
  border: "1px solid #ccc",
  background: "white",
  cursor: "pointer"
};

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
              border: "1px solid #e0e0e0",
              padding: 16,
              marginBottom: 16,
              borderRadius: 8,
              backgroundColor: "#fafafa"
              }}
>
  
              <h4>{item.title}</h4>
              <p>Price: ₹ {item.price}</p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button style={qtyBtnStyle} onClick={() => decreaseQty(item.id)}>
                    −
                 </button>

                 <strong>{item.quantity}</strong>

                 <button style={qtyBtnStyle} onClick={() => increaseQty(item.id)}>
                    +
                 </button>
              </div>


              <p>Subtotal: ₹ {item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                 marginTop: 10,
                 background: "#ff4d4f",
                 color: "white",
                 border: "none",
                 padding: "6px 12px",
                 borderRadius: 4,
                  cursor: "pointer"
                }}
              >
               Remove
              </button>

            </div>
          ))}

          <hr />

          <h3>Total: ₹ {totalPrice}</h3>

      
          {cartItems.length > 0 && (
          <Link to="/checkout">
          <button
          style={{
          marginTop: 20,
          padding: "10px 16px",
          fontSize: 16,
          background: "#1677ff",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer"
          }}
        >
      Proceed to Checkout
      </button>
    </Link>
      )}

        </>
      )}
    </div>
  );
};

export default Cart;
