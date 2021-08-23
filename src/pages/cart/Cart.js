import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { user } = useAuthContext();
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <div className="cart">
      <Header />
      <h1>cart page</h1>
      <button onClick={() => clearCart()}>clear cart</button>
      <code>{JSON.stringify(cart, null, 2)}</code>
    </div>
  );
};
export default Cart;
