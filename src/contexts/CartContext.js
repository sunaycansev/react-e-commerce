import { useState, createContext, useContext } from "react";
import { setLocalStorage } from "../utils";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

  const addToCart = async (data) => {
    const isProduct = cart.some((item) => item.id === data.id);

    if (!isProduct) {
      const item = { ...data, count: 1 };
      setCart([item, ...cart]);
      // setLocalStorage("cart", item, cart);
      window.localStorage.setItem("cart", JSON.stringify([item, ...cart]));
    } else {
      const thisProduct = cart.find((item) => item.id === data.id);
      const otherProducts = cart.filter((item) => item.id !== data.id);

      let newCart = [...cart];

      let incrementedProduct = {
        ...thisProduct,
        count: thisProduct.count + 1,
      };

      newCart = [incrementedProduct, ...otherProducts];

      console.log(newCart);
      setCart(newCart);

      // setLocalStorage("cart", { ...newCart[0] }, prevCart);
      // console.log(cart);
      // setLocalStorage("cart", { ...newCart[0] });
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const removeCartItem = async (data) => {
    const newCart = cart.filter((item) => item.id !== data.id);
    setCart(newCart);
    // setLocalStorage("cart", newCart);
    //önce filtreyle o ürünü bul
    // count 1 den fazlaysa -1
    // count 1 se sil
  };
  const decreaseCartItem = async (data) => {
    const thisProduct = cart.filter((product) => product.id === data.id);
    const otherProducts = cart.filter((product) => product.id !== data.id);
    let newCart = [...cart];
    // if the count of prod is bigger than 1 just decrease its count else remove it from cart
    if (thisProduct.count > 1) {
      let decrementedProduct = {
        ...thisProduct,
        count: thisProduct.count - 1,
      };
      newCart = [...decrementedProduct, ...otherProducts];
    } else {
      newCart = cart.filter((product) => product.id !== data.id);
    }

    setCart(newCart);
  };

  //clearCart fonk
  const clearCart = async (data) => {
    setCart([]);
  };

  const value = {
    cart,
    setCart,
    addToCart,
    removeCartItem,
    decreaseCartItem,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

//
export const useCartContext = () => useContext(CartContext);
