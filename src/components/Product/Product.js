import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_Product.scss";
import { FiShoppingCart } from "react-icons/fi";

const Product = ({ product }) => {
  const { image, title, price, id } = product;
  return (
    <Card
      border="dark"
      style={{ width: "15rem" }}
      className="my-5 mx-2 position-relative bg-secondary"
    >
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{}}
          className="mx-auto py-2"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title className="text-dark align-self-center">
            {title}
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text className="text-success fs-5 fw-bold">${price}</Card.Text>
      <Button className="my-2" variant="primary" onClick={() => alert(id)}>
        <FiShoppingCart className="me-2" /> Add to Cart
      </Button>
    </Card>
  );
};
export default Product;
