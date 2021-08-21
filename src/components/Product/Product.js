import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./_Product.scss";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { FaHeart, FaRandom, FaStar, FaStarHalf } from "react-icons/fa";
import { useCartContext } from "../../contexts/CartContext";

const Product = ({ product }) => {
  const { image, title, price, id } = product;
  const { addToCart, removeCartItem } = useCartContext();
  return (
    <Col md={4} sm={6} lg={3} className="d-flex p-0">
      <div className="product-grid shadow-sm rounded-1  justify-content-center align-self-center d-flex flex-column ">
        <div className="product-image">
          <Link to={`/product/${product.id}`} className="image">
            <img className="pic-1 img-fluid " src={image} alt="img-1" />
            <img
              className="pic-2 img-fluid"
              src="https://www.itopya.com/picture/razer-viper-mini-gaming-mouse-0.jpg"
              alt="img-1"
            />
          </Link>
          <span className="product-sale-label">hot</span>
          <span className="product-discount-label">-30%</span>
        </div>
        <div className="product-content d-flex flex-column">
          <ul className="rating">
            <li className="fas fa-star">
              <FaStar />
            </li>
            <li className="fas fa-star">
              <FaStar />
            </li>
            <li className="fas fa-star">
              <FaStar />
            </li>
            <li className="fas fa-star">
              <FaStar />
            </li>
            <li className="fas fa-star disable">
              <FaStar />
            </li>
          </ul>
          <h3 className="title">
            <a href={`/product/${product.id}`}>{title.slice(0, 40)}</a>
          </h3>
          <div className="price " style={{ color: "#ff6000" }}>
            <span>$99.99</span>
            {price}
          </div>
          <div className="product-button-group mt-auto">
            <a href="/#" className="product-like-icon">
              <FaHeart />
            </a>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              <FiShoppingCart /> Add To Cart
            </button>
            <a href="/#" className="product-compare-icon">
              <FaRandom />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Product;
