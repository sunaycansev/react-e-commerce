import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import { ProductsContext } from "../../contexts/ProductsContext";

const ProductList = () => {
  const products = useContext(ProductsContext);
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
