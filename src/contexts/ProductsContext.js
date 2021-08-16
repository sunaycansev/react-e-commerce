import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
export const useProductsContext = () => useContext(ProductsContext);
