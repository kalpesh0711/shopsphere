import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  const storedCart = localStorage.getItem("cart");
  if (!storedCart) return [];

  return JSON.parse(storedCart).map(item => ({
    ...item,
    quantity: item.quantity ?? 1
  }));
});


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
  setCartItems((prev) => {
    const exists = prev.find(item => item.id === product.id);

    if (exists) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};
  
  const increaseQty = (id) => {
  setCartItems((prev) =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCartItems((prev) =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter(item => item.id !== id));
};

const clearCart = () => {
  setCartItems([]);
};


  return (
   <CartContext.Provider
  value={{
  cartItems,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  totalPrice
}}

>

      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
