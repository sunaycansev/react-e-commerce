import { useState, createContext, useContext, useEffect } from "react";

import { useAuthContext } from "./AuthContext";
import axios from "axios";
const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { loggedIn, user } = useAuthContext();

  useEffect(() => {
    const fetchCart = async () => {
      if (loggedIn && user) {
        const { data } = await axios.get(
          `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`
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

      //console.log(newCart);
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
        .get(`https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`)
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

      axios.put(
        `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
        {
          cart: isInCart
            ? [incrementedProduct, ...otherProducts]
            : [item, ...prevCart],
        }
      );
    }
  };
  const removeCartItem = async (data) => {
    const newCart = cart.filter((item) => item.id !== data.id);
    setCart(newCart);
    //TODO
    localStorage.setItem("cart", JSON.stringify(newCart));

    //TODO
    if (!loggedIn) {
      return;
    } else {
      const prevCart = await axios
        .get(`https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`)
        .then((res) => res.data.cart);
      const newCart = prevCart.filter((product) => product.id !== data.id);

      axios.put(
        `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
        {
          cart: newCart,
        }
      );
    }
  };
  // const increaseCartItem = async (data) => {
  //   const thisProduct = cart.find(product => product.id === data.id);
  //   const otherProducts = cart.filter((product) => product.id !== data.id);
  //   const prevCart = [...cart];
  //
  // }
  const decreaseCartItem = async (data) => {
    const thisProduct = cart.find((product) => product.id === data.id);
    const otherProducts = cart.filter((product) => product.id !== data.id);
    const prevCart = [...cart];
    if (thisProduct.count > 1) {
      let decrementedProduct = {
        ...thisProduct,
        count: thisProduct.count - 1,
      };

      const newCart = [decrementedProduct, ...otherProducts];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = prevCart.filter((product) => product.id !== data.id);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    if (!loggedIn) {
      return;
    } else {
      const prevCart = await axios
        .get(`https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`)
        .then((res) => res.data.cart);
      const thisProduct = prevCart.find((product) => product.id === data.id);
      const otherProducts = prevCart.filter(
        (product) => product.id !== data.id
      );
      if (thisProduct.count > 1) {
        let decrementedProduct = {
          ...thisProduct,
          count: thisProduct.count - 1,
        };
        const newCart = [decrementedProduct, ...otherProducts];
        axios.put(
          `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
          {
            cart: newCart,
          }
        );
      } else {
        const prevCart = await axios
          .get(
            `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`
          )
          .then((res) => res.data.cart);
        const newCart = prevCart.filter((product) => product.id !== data.id);
        axios.put(
          `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
          {
            cart: newCart,
          }
        );
      }
    }
  };
  const increaseCartItem = async (data) => {
    const thisProduct = cart.find((product) => product.id === data.id);
    const otherProducts = cart.filter((product) => product.id !== data.id);
    const prevCart = [...cart];
    let incrementedProduct = {
      ...thisProduct,
      count: thisProduct.count + 1,
    };
    const newCart = [...otherProducts, incrementedProduct];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    if (!loggedIn) {
      return;
    } else {
      const prevCart = await axios
        .get(`https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`)
        .then((res) => res.data.cart);
      const thisProduct = prevCart.find((product) => product.id === data.id);
      const otherProducts = prevCart.filter(
        (product) => product.id !== data.id
      );
      let incrementedProduct = {
        ...thisProduct,
        count: thisProduct.count + 1,
      };
      const newCart = [...otherProducts, incrementedProduct];
      axios.put(
        `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
        {
          cart: newCart,
        }
      );
    }
  };

  //clearCart fonk
  const clearCart = async (data) => {
    setCart([]);
    localStorage.removeItem("cart");
    if (!loggedIn) {
      return;
    } else {
      axios.put(
        `https://612566f5da3cde0017da105d.mockapi.io/api/users/${user.id}`,
        {
          cart: [],
        }
      );
    }
  };

  const value = {
    cart,
    setCart,
    addToCart,
    removeCartItem,
    decreaseCartItem,
    clearCart,
    increaseCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

//
export const useCartContext = () => useContext(CartContext);
