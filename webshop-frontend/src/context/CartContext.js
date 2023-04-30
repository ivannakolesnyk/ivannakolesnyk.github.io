import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

/**
 * Returns the CartContext
 */
export const useCart = () => {
  return useContext(CartContext);
};

/**
 * CartProvider component provides the state and methods for managing cart items.
 * @param {object} children - The child components to be wrapped with the CartProvider.
 * @returns {JSX.Element} - The JSX code for the CartProvider component.
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      saveCart(updatedCart);
    } else {
      saveCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    saveCart(updatedCart);
  };

  const adjustQuantity = (productId, adjustment) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + adjustment;
        if (newQuantity >= 1) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    adjustQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
