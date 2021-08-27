import React from "react";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { FiMail, FiPhone } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "./_Contact.scss";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <Container fluid={true} className="banner  p-0 my-5">
        <Row className="row">
          <Col className="col">
            <img
              className="img-fluid"
              src="https://assets2.razerzone.com/images/pnx.assets/ef9f0b65c4a27776c4f9b93c4a8820b3/razer-strider-hero-desktop.jpg"
              alt="banner"
            />
          </Col>
        </Row>
      </Container>
      <Container className="bottom-section">
        <Row>
          <Col lg={6} className="border p-5 form-col p-5">
            <div className="form d-flex flex-column">
              <h4 className="text-center fs-3 my-3">Send Us A Message</h4>
              <div className="email-div mx-auto w-100">
                <label htmlFor="email" className="">
                  <FiMail />
                </label>
                <input
                  className="my-3 w-100   d-block"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E Mail Address"
                />
              </div>
              <div className="msg-div  w-100 d-block">
                <textarea
                  className="my-2  w-100"
                  rows={10}
                  // type="textarea"
                  name="msg"
                  id="msg"
                  placeholder="How Can We Help?"
                />
              </div>
              <button className="btn btn-dark text-light p-2">Submit</button>
            </div>
          </Col>
          <Col lg={6} className="border contact-col p-5">
            <div className="contact-datas d-flex flex-column justify-content-center align-items-center">
              <div className="address d-flex flex-row my-5">
                <div className="adress-icon align-self-center ">
                  <BiMap className="fs-3" />
                </div>
                <div className="address-text">
                  <h6 className="text-center">Address</h6>
                  <p className="ms-5">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              <div className="number d-flex flex-row justify-content-between w-100 my-5">
                <div className="number-icon align-self-center">
                  <FiPhone className="fs-4" />
                </div>
                <div className="number-text me-5  text-primary">
                  +1 800 1236879
                </div>
              </div>
              <div className="mail d-flex flex-row justify-content-between w-100 my-5">
                <div className="mail-icon align-self-center">
                  <AiOutlineMail className="fs-4" />
                </div>
                <div className="mail-text me-5 text-primary">
                  contact@example.com
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
