import React from "react";
import "./_Footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="/#" className="footer-site-logo d-block mb-4 fs-4">
              SunayCommerce
            </a>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quasi perferendis ratione perspiciatis accusantium.
            </p>
          </div>
          <div className="col-md">
            <ul className="list-unstyled">
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">About Us</a>
              </li>
              <li>
                <a href="/#">Portfolio</a>
              </li>
              <li>
                <a href="/#">Services</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled">
              <li>
                <a href="/#">Clients</a>
              </li>
              <li>
                <a href="/#">Team</a>
              </li>
              <li>
                <a href="/#">Career</a>
              </li>
              <li>
                <a href="/#">Testimonials</a>
              </li>
              <li>
                <a href="/#">Journal</a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled">
              <li>
                <a href="/#">Privacy Policy</a>
              </li>
              <li>
                <a href="/#">Terms & Conditions</a>
              </li>
              <li>
                <a href="/#">Partners</a>
              </li>
            </ul>
          </div>
          <div className=" col-md text-center ">
            <ul className="socials list-unstyled">
              <li>
                <a href="/#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="/#">
                  <TiSocialLinkedin />
                </a>
              </li>
            </ul>
            <p>
              <a href="/#" className="btn btn-tertiary">
                Contact Us
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="copyright mt-5 pt-5 text-center">
              <p>
                <small>© 2021-2022 All Rights Reserved.</small>
                <br />
                <small>Made by Sunay</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
