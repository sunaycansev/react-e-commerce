import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCartContext } from "../../contexts/CartContext";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BsInfoCircle, BsChevronDown } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";

const Cart = () => {
  const { user } = useAuthContext();
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <>
      <Header />
      <main>
        <Container className="cart-container container">
          <section className="mt-5 mb-4">
            <Row>
              <Col lg={8}>
                <div className="card wish-list mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">Cart (2 items)</h5>
                    {cart.map((product, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3">
                              <div className="image">
                                <img
                                  style={{ height: "auto", width: "7rem" }}
                                  src={product.image}
                                  alt="product-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                              <div>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <h5 className="product-name">
                                      {product.title}
                                    </h5>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      {product.category}
                                    </p>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      Color:blue
                                    </p>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      Sİze:M
                                    </p>
                                  </div>
                                  <div>
                                    <div className="def-number-input number-input mb-0 w-100">
                                      <button className="minus">-</button>
                                      <input
                                        type="number"
                                        name="count"
                                        id="count"
                                      />
                                      <button className="plus">+</button>
                                    </div>
                                    <small
                                      id="passwordHelpBlock"
                                      className="for-text text-muted text-center"
                                    >
                                      {`note ${product.count} piece`}
                                    </small>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <button>remove item</button>
                                    <button>move to wish list</button>
                                  </div>
                                  <p className="mb-0">
                                    <span>${product.price}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="mb-4" />
                        </React.Fragment>
                      );
                    })}
                    <p className="text-primary mb-0">
                      <span>
                        <BsInfoCircle />
                      </span>
                      Do not delay the purchase, adding items to your cart does
                      not mean booking them.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">Expected shipping delivery</h5>
                    <p className="mb-0">(date i yaz)</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">We accept</h5>
                    <FaCcVisa />
                    <FaCcVisa />
                    <FaCcVisa />
                    <FaCcVisa />
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card mb-4 p-3">
                  <div className="card-body ">
                    <h5 className="mb-3">The Total amount of</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <span>Temporary amount</span>
                        <span>$399</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-bottom-1  px-0 pb-0">
                        <span>Shipping</span>
                        <span>$13.99</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <div>
                          <strong>The Total amount of</strong>
                          <strong>including VAT</strong>
                        </div>
                        <span>
                          <span>$99.99</span>
                        </span>
                      </li>
                    </ul>
                    <button
                      variant="primary"
                      className="btn-block btn btn-primary"
                    >
                      go to checkout
                    </button>
                  </div>
                </div>
                {/*TODO discount coupon bölümü*/}
                <div className="card mb-4"></div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      {/*<Footer />*/}
    </>
  );
};
export default Cart;
