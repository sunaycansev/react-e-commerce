import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_Product.scss";

const Product = ({ product }) => {
  const { image, title, price, id } = product;
  return (
    <Card border="dark" style={{ width: "15rem" }} className="my-5 mx-2">
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{
            width: "10rem",
            height: "13rem",
            margin: "0 auto",
            objectFit: "contain",
          }}
          className="mx-auto py-2"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text className="text-muted">
          ${price} id:{id}
        </Card.Text>
        <Button variant="primary" onClick={() => alert(id)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
