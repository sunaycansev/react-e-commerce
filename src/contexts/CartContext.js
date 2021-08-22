import { useState, createContext, useContext, useEffect } from "react";
import { setLocalStorage } from "../utils";
import { useAuthContext } from "./AuthContext";
import axios from "axios";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { loggedIn, user } = useAuthContext();
  const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];
  //TODO
  /*
  --database kontrolü yap ve fetch ile userın cartını alarak default cart yap


   */
  useEffect(() => {
    const fetchCart = async () => {
      if (loggedIn && user) {
        const { data } = await axios.get(
          `http://localhost:8000/users/${user.id}`
        );
        const userCart = data.cart;

        setCart(userCart);
      } else {
        setCart(defaultCart);
      }
    };
    fetchCart();
  }, [loggedIn, user]);

  const addToCart = async (data) => {
    //  giriş yaptıysa kontrol et

    //true ise o ürünü kişinin cartına pushla localestorage at carta at

    // false ise o ürünü sepete ve lcoalstorage a at

    // login yaptı anda login() get o kişinin kartını alacak sonra localestorage ürünleri cartla birleştirecek ...spread

    let isInCart = cart.some((item) => item.id === data.id);
    let newCart = [];
    let item = {};
    let otherProducts = [];
    let incrementedProduct;
    let thisProduct;
    if (!isInCart) {
      item = { ...data, count: 1 };
      setCart([item, ...cart]);
      // setLocalStorage("cart", item, cart);
      window.localStorage.setItem("cart", JSON.stringify([item, ...cart]));
    } else {
      thisProduct = cart.find((item) => item.id === data.id);
      otherProducts = cart.filter((item) => item.id !== data.id);

      newCart = [...cart];

      incrementedProduct = {
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
    if (!loggedIn) {
      return;
    } else {
      //axios post

      const prevCart = await axios
        .get(`http://localhost:8000/users/${user.id}`)
        .then((res) => res.data.cart);
      isInCart = prevCart.some((item) => item.id === data.id);

      if (isInCart) {
        thisProduct = cart.find((item) => item.id === data.id);
        otherProducts = prevCart.filter((product) => product.id !== data.id);
        incrementedProduct = {
          ...thisProduct,
          count: thisProduct.count + 1,
        };
      }

      //const newCart = [...prevCart, { ...data, count: 1 }];
      debugger;
      axios.patch(`http://localhost:8000/users/${user.id}`, {
        cart: isInCart
          ? [incrementedProduct, ...otherProducts]
          : [item, ...prevCart],
      });
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
