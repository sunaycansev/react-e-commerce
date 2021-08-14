import { useState, createContext } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
