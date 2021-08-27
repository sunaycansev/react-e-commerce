import React from "react";
import Header from "../../components/Header/Header";
import "./_About.scss";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Container fluid={true} className="banner m-0 p-0 mt-5">
        <Row className="row">
          <Col className="col">
            <img
              className="img-fluid"
              src="https://assets2.razerzone.com/images/pnx.assets/a5caccba8c4ab41f8f440cf234656fba/razer-raptor-27-hero-desktop.jpg"
              alt="banner"
            />
          </Col>
        </Row>
      </Container>
      <Container className="bottom-section">
        <Row className="d-flex mt-5">
          <Col md={8} className="our-story-text">
            <div className="story me-3 p-5">
              <h1>Our Story</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit. Donec gravida
                lorem elit, quis condimentum ex semper sit amet. Fusce eget
                ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
                turpis in vehicula vehicula. Pellentesque congue ac orci ut
                gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
                facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna
                vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat
                arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
                convallis ipsum, et maximus enim ligula ac ligula. Any
                questions? Let us know in store at 8th floor, 379 Hudson St, New
                York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center img-1-col">
            <div className="img-1 border-div rounded-5 ">
              <div className="img-hover  overflow-hidden ">
                <img
                  className="w-100  z-index-2 top-0 start-0"
                  src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="men"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex mt-5">
          <Col className="d-flex justify-content-center align-items-center img-2-col">
            <div className="img-2 border-2-div rounded-5">
              <div className="img-2-hover">
                <img
                  className=" w-100"
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="men"
                />
              </div>
            </div>
          </Col>
          <Col md={8} className="">
            <div className="story me-3 p-5">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit. Donec gravida
                lorem elit, quis condimentum ex semper sit amet. Fusce eget
                ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
                turpis in vehicula vehicula. Pellentesque congue ac orci ut
                gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
                facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna
                vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat
                arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
                convallis ipsum, et maximus enim ligula ac ligula. Any
                questions? Let us know in store at 8th floor, 379 Hudson St, New
                York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default About;
