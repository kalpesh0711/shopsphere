const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h2>Cart Page</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <button
              onClick={() =>
                setCartItems(cartItems.filter((_, i) => i !== index))
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
