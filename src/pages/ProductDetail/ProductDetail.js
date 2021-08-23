import React from "react";
import { useParams } from "react-router-dom";
import "./_ProductDetail.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Col,
  Container,
  Form,
  Image,
  Row,
  Button,
  Tabs,
  Table,
} from "react-bootstrap";
import { useProductsContext } from "../../contexts/ProductsContext";
import { useCartContext } from "../../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { GiHanger } from "react-icons/gi";
import { Tab } from "bootstrap";

function ProductDetail() {
  const { productId } = useParams();
  const { products } = useProductsContext();
  const { addToCart, removeCartItem, decreaseCartItem } = useCartContext();
  const [thisProduct] = products.filter(
    (product) => Number(productId) === Number(product.id)
  );

  return (
    <React.Fragment>
      <Header />
      <Container>
        <section className="my-5  ">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              md={4}
              className="mb-4 img-container  d-flex justify-content-center align-items-center p-3"
            >
              <Image className="w-100" src={thisProduct?.image} rounded />
            </Col>
            <Col md={8} className=" p-3">
              <h5 className="my-3">{thisProduct?.title}</h5>
              <p className="mb-2 text-muted text-uppercase small">
                {thisProduct?.category}
              </p>
              <p className="pt-1 lh-base font-monospace">
                {thisProduct?.description}
              </p>
              <p className="mr-1 fw-bold font-monospace text-success fs-5">
                ${thisProduct?.price}
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
                <Col
                  md={9}
                  className="justify-content-end align-items-center flex-row d-flex"
                >
                  <GiHanger className="align-self-center justify-content-center me-2" />
                  <a
                    href={`/product/${thisProduct?.id}#`}
                    className="text-muted "
                  >
                    Find your fit Assistant Size
                  </a>
                </Col>
              </Row>

              <hr />
              <Button
                variant="dark"
                className="px-4"
                onClick={() => {
                  addToCart(thisProduct);
                }}
              >
                <FiShoppingCart className="me-2" />
                Add To Cart
              </Button>
              <Button variant="outline-dark" className="mx-5">
                Find in Store
              </Button>
              <Button
                variant="outline-dark"
                className="mx-5"
                onClick={() => removeCartItem(thisProduct)}
              >
                Remove From Cart
              </Button>
              <Button
                variant="outline-dark"
                className="mx-5"
                onClick={() => decreaseCartItem(thisProduct)}
              >
                Decrease From Cart
              </Button>
              <Button
                variant="outline-dark"
                className="mx-5"
                onClick={() => addToCart(thisProduct)}
              >
                ıncrease From Cart
              </Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container className="bottom-container">
        <section>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="details"
                id="uncontrolled-tab-example"
                className="mb-5"
              >
                <Tab eventKey="details" title="details">
                  <h4>Additional Information</h4>
                  <Table striped bordered hover variant="secondary" size="sm">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <td>{thisProduct?.category}</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td>1kg</td>
                      </tr>
                      <tr>
                        <th>Dimension</th>
                        <td>70 x 90 cm</td>
                      </tr>
                      <tr>
                        <th>Brand</th>
                        <td>Pull and Bear</td>
                      </tr>
                      <tr>
                        <th>Color</th>
                        <td>Blue</td>
                      </tr>
                    </thead>
                  </Table>
                </Tab>
                <Tab eventKey="information" title="information">
                  <h5>Free Shipping</h5>
                  <p>(Express delivery)</p>
                  <p>
                    Valid on full price items for orders of €174 or more Use
                    code A8DAE7
                  </p>
                  <p className="text-muted text-decoration-underline">
                    More Shipping Information
                  </p>
                  <h5>Free Returns</h5>
                  <p>
                    You may return your order for FREE for any reason within 28
                    days of receipt.
                  </p>
                  <p className="text-muted text-decoration-underline">
                    More return information
                  </p>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
export default ProductDetail;
