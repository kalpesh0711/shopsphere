import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

// Create provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter(item => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
