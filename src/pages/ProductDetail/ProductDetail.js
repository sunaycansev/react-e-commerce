import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { productId } = useParams();
  axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
    const product = res.data;
    console.log(product);
  });
  return (
    <div>
      <h1>{productId}</h1>
    </div>
  );
}
export default ProductDetail;
