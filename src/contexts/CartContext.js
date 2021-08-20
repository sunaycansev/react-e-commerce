import { useState, createContext, useContext } from "react";
import { setLocalStorage } from "../utils";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (data) => {
    const isProduct = cart.some((item) => item.id === data.id);

    if (!isProduct) {
      const item = { ...data, count: 1 };
      setCart([item, ...cart]);
      setLocalStorage("cart", item, cart);
    } else {
      const prevCart = cart.filter((product) => product.id !== data.id);
      const newCart = cart
        .filter((product) => product.id === data.id)
        .map((product) => ({
          ...product,
          count: product.count + 1,
          ...prevCart[0],
        }));
      console.log(newCart);

      setCart(newCart);
      // console.log(cart);
      setLocalStorage("cart", { ...newCart[0] }, prevCart);
    }
  };
  const removeCartItem = async (data) => {
    const newCart = cart.filter((item) => item.id !== data.id);
    setCart(newCart);
    setLocalStorage("cart", newCart);
    //önce filtreyle o ürünü bul
    // count 1 den fazlaysa -1
    // count 1 se sil
  };

  //clearCart fonk

  const value = { cart, setCart, addToCart, removeCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

//
export const useCartContext = () => useContext(CartContext);
