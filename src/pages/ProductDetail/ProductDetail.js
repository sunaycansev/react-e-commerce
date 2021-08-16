import React from "react";
import { useParams } from "react-router-dom";
import "./_ProductDetail.scss";
import Header from "../../components/Header/Header";
import { Col, Container, Form, Image, Row, Button } from "react-bootstrap";
import { useProductsContext } from "../../contexts/ProductsContext";
import { FiShoppingCart } from "react-icons/fi";

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProductsContext();
  const [details] = products.filter(
    (product) => Number(productId) === Number(product.id)
  );

  console.log(details);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <section className="my-5 ">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              md={4}
              className="mb-4 img-container  d-flex justify-content-center align-items-center p-3"
            >
              <Image className="w-100" src={details?.image} rounded />
            </Col>
            <Col md={8} className=" p-3">
              <h5 className="my-3">{details?.title}</h5>
              <p className="mb-2 text-muted text-uppercase small">
                {details?.category}
              </p>
              <p className="pt-1 lh-base font-monospace">
                {details?.description}
              </p>
              <p className="mr-1 fw-bold font-monospace text-success fs-5">
                ${details?.price}
              </p>
              <Row>
                <Col md={3}>
                  <Form>
                    <Form.Select aria-label="select-size">
                      <option>Select Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>

              <hr />
              <Button variant="dark" className="px-4">
                <FiShoppingCart className="me-2" />
                Add To Cart
              </Button>
            </Col>
          </Row>
        </section>
      </Container>
    </React.Fragment>
  );
}
export default ProductDetail;
