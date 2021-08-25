import React from "react";

import { Link } from "react-router-dom";
import "./_Product.scss";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";
import { FaRandom, FaStar } from "react-icons/fa";
import { useCartContext } from "../../contexts/CartContext";

function renderStars(number) {
  const arr = new Array(number).fill(0);
  return (
    <ul className="rating p-0 m-0 mt-1 mb-3">
      {arr.map((i, key) => (
        // <li key={key} className="fas fa-star"></li>
        <li key={key} className=" list-unstyled d-inline fs-4 text-warning">
          <FaStar className="mt-3" />
        </li>
      ))}
    </ul>
  );
}

const Product = ({ product }) => {
  const { images, title, price, id } = product;
  const { addToCart, removeCartItem } = useCartContext();
  const secondaryImage =
    "https://www.itopya.com/picture/razer-viper-mini-gaming-mouse-04.jpg";
  return (
    <div key={id} className="column col-sm-6 col-md-4 col-lg-3 my-3">
      <div
        style={{ height: "100%" }}
        className="product d-flex flex-column m-0  p-2 shadow-lg rounded bg-white"
      >
        <Link
          className="text-decoration-none text-center text-dark"
          to={`/product/${product.id}`}
        >
          <div className="top d-flex flex-column align-items-center pb-5 pt-3 position-relative">
            {/* 33 ve hot */}
            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger p-2 fs-6">
              %33
            </span>
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-success p-2 fs-6">
              New
            </span>
            <img
              style={{ height: 200, objectFit: "contain" }}
              className="primary-image img-fluid"
              src={images[0]}
              alt={title}
            />
            <img
              style={{ height: 200, objectFit: "contain" }}
              className="secondary-image img-fluid"
              src={images[1]}
              alt={title}
            />
            {renderStars(5)}
            <strong> {title} </strong>
          </div>
        </Link>
        <div className="bottom d-flex flex-column mt-auto justify-content-center my-2">
          {/*<span className="justify-content-end">{price + 30}</span>*/}
          <span className="text-center my-2 fs-4 text-success">${price}</span>
          <div className="btn-group d-flex flex-column align-items-center">
            <BsHeartFill className="icon fs-5" />
            <button
              className="btn  btn-md btn-dark fs-6 font-monospace"
              onClick={() => addToCart(product)}
            >
              {/*<i className="cart-icon fas fa-shopping-cart me-2"></i>*/}
              <FiShoppingCart className="me-2 cart-icon fs-5" />
              Add to Card
            </button>
            {/*<i className="icon right fas fa-random"></i>*/}
            <FaRandom className="icon right fs-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
