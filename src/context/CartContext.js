import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Exportación CORRECTA
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  let nextOrderId = orders.length + 1;

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const completePurchase = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: nextOrderId,
      products: [...cart],
      date: new Date().toLocaleDateString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]);
    nextOrderId++;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, orders, completePurchase }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; // Exportación del contexto
