import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  return <ProductsContext.Provider>{props.children}</ProductsContext.Provider>;
};
export default ProductsProvider;
