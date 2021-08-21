import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { cart } = useAuthContext();
  return (
    <div className="cart">
      <Header />
      <h1>cart page</h1>
      <code>{cart}</code>
    </div>
  );
};
export default Cart;
