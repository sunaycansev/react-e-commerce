import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Col, Container, Image, Row } from "react-bootstrap";

function ProductDetail() {
  const { productId } = useParams();

  // const myProduct = products.filter(
  //   (item) => Number(item.id) === Number(productId)
  // )[0];

  return (
    <React.Fragment>
      <Header />
      <Container>
        <section className="my-5 ">
          <Row>
            <Col md={6} className="mb-4">
              <Image src={`https://picsum.photos/300/500`} rounded />
            </Col>
            <Col md={6}>
              <h5>buraya title gelir</h5>
              <p className="mb-2 text-muted text-uppercase small">category</p>
              <p className="pt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                corporis doloremque dolorum officiis rem. Aliquid dolorem iusto
                molestias nesciunt, numquam quo vero. Accusamus architecto,
                earum?
              </p>
              <p className="mr-1 fw-bold font-monospace text-success">$19.99</p>
              <hr />
            </Col>
          </Row>
        </section>
      </Container>
    </React.Fragment>
  );
}
export default ProductDetail;
