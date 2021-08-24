import React from "react";
import Header from "../../components/Header/Header";

import { useCartContext } from "../../contexts/CartContext";
import Footer from "../../components/Footer/Footer";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { BsInfoCircle, BsHeart } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import { MdLocalShipping, MdRemoveShoppingCart } from "react-icons/md";

import masterCard from "../../assets/mastercard.png";
import visaCard from "../../assets/visa-logo-png-2020.png";
import paypalCard from "../../assets/paypal-svgrepo-com.svg";

const Cart = () => {
  const {
    cart,
    clearCart,
    addToCart,
    removeCartItem,
    decreaseCartItem,
    increaseCartItem,
  } = useCartContext();
  console.log(cart);
  const temporaryAmountOfCart = Number(
    cart.reduce((acc, prod) => acc + prod.price * prod.count, 0).toFixed(2)
  );
  const shipAmount = Number((temporaryAmountOfCart / 15).toFixed(2));
  const totalAmountOfCart = Number(
    (temporaryAmountOfCart + shipAmount).toFixed(2)
  );

  return (
    <>
      <Header />
      <main>
        <Container className="cart-container container">
          <section className="mt-5 mb-4">
            <Row>
              <Col lg={8}>
                <div className="card wish-list mb-4 shadow-lg p-3">
                  <div className="card-body">
                    <h5 className="mb-4 fs-5">{`Cart (${cart.length} items) `}</h5>
                    {/*TODO*/}
                    {cart.length === 0 && (
                      <div className="">
                        {/*<h2 className="text-danger text-center">*/}
                        {/*  <span>*/}
                        {/*    <MdRemoveShoppingCart />*/}
                        {/*  </span>{" "}*/}
                        {/*  Cart is Empty*/}
                        {/*</h2>*/}
                        <Alert variant="danger">
                          <h4 className="text-center">
                            <span>
                              <MdRemoveShoppingCart className="me-3" />
                            </span>
                            Your shopping cart is empty
                          </h4>
                        </Alert>
                      </div>
                    )}
                    {cart.map((product, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3  ">
                              <div className="image   mb-3">
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={product.image}
                                  alt="product-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                              <div>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <h5
                                      className="product-name lh-sm"
                                      style={{ color: "#4f4f4f" }}
                                    >
                                      {product.title}
                                    </h5>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      {product.category}
                                    </p>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      Color: blue
                                    </p>
                                    <p className="mb-3 text-muted text-uppercase small">
                                      Size: M
                                    </p>
                                  </div>
                                  <div>
                                    <div className="def-number-input number-input mb-0  d-flex align-items-center">
                                      <button
                                        className="minus btn btn-sm btn-outline-dark btn-outline rounded-1 px-3 me-2"
                                        onClick={() =>
                                          decreaseCartItem(product)
                                        }
                                      >
                                        <span className=" fw-bolder fs-6">
                                          -
                                        </span>
                                      </button>
                                      <input
                                        className="border-1 text-dark text-center ps-3 py-1 me-2 rounded-1"
                                        style={{ maxWidth: "3rem" }}
                                        type="number"
                                        name="count"
                                        id="count"
                                        value={product.count}
                                        onChange={() => {}}
                                      />
                                      <button
                                        className="plus btn btn-sm btn-outline-dark rounded-1 px-3 "
                                        onClick={() =>
                                          increaseCartItem(product)
                                        }
                                      >
                                        <span className="fw-bolder fs-6">
                                          +
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <button
                                      className="btn rounded-0 btn-outline-dark pt-1 px-2 me-3"
                                      onClick={() => removeCartItem(product)}
                                    >
                                      <FaTrash className="fs-5" />
                                    </button>
                                    <button className="btn rounded-0 btn-outline-dark pt-1 px-2">
                                      <BsHeart
                                        className="fs-5"
                                        style={{ color: "red" }}
                                      />
                                    </button>
                                  </div>
                                  <p className="mb-0 text-success fw-bolder fs-5">
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
                    <p className="text-primary mb-0 font-monospace">
                      <span className="me-2">
                        <BsInfoCircle />
                      </span>
                      Do not delay the purchase, adding items to your cart does
                      not mean booking them.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4 text-dark">
                      Expected shipping delivery
                    </h5>

                    <p className="mb-0 fs-6">
                      {" "}
                      <span>
                        <MdLocalShipping className="me-2 fs-3 text-success" />
                      </span>{" "}
                      Thu., 12.03. - Mon., 21.09.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">We accept</h5>
                    <img
                      src={visaCard}
                      alt="visa"
                      style={{ width: "4rem" }}
                      className="me-3"
                    />

                    <img
                      className="me-3"
                      src={paypalCard}
                      alt="paypal"
                      style={{ width: "6rem" }}
                    />

                    <img
                      src={masterCard}
                      alt="masterCard"
                      style={{ width: "6rem" }}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="card mb-4 p-3">
                  <div className="card-body ">
                    <h4 className="mb-3">The Total amount of</h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <span className=" fw-bold mb-3">Temporary amount</span>
                        <span className="text-success fw-bolder">
                          ${temporaryAmountOfCart}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-bottom-1  px-0 pb-0">
                        <span className="fw-bold mb-3">Shipping</span>
                        <span className="text-success fw-bolder">
                          ${shipAmount}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <div className="mb-3">
                          <strong>The Total amount of</strong> <br />
                          <strong>(including VAT)</strong>
                        </div>
                        <span>
                          <span className="text-success fw-bolder">
                            ${totalAmountOfCart}
                          </span>
                        </span>
                      </li>
                    </ul>
                    <button className="btn-block btn btn-primary justify-content-center w-100 p-2 shadow-lg">
                      GO TO CHECKOUT
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-center my-3 text-capitalize text-lighter fs-6">
                    do you have a promo code ?
                  </h5>
                  <form>
                    <div>
                      <input
                        type="text"
                        className="w-100 d-block my-3 px-2"
                        style={{
                          fontSize: "16px",
                          height: "48px",
                          background: "transparent",
                          border: "1px solid #43434d",
                          borderRadius: "0",
                          color: "#000",
                          width: "100%",
                        }}
                        placeholder="ENTER PROMO CODE"
                      />
                    </div>
                  </form>
                  <button className="btn btn-dark d-block w-100  rounded-0">
                    Apply
                  </button>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
};
export default Cart;
