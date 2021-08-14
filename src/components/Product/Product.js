import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">
            ${price} id:{id}
          </Card.Text>
          <Button variant="primary" onClick={() => alert(id)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Link>
    </Card>
  );
};
export default Product;
