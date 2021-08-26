import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./_Carousel.scss";
function Slider() {
  return (
    <Container className="slider p-3">
      <Row>
        <Col>
          <Carousel className="position-relative">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets2.razerzone.com/pages/barracuda-x-4c578898e8144ee8da21dde32b7a9f5f/barracuda-x_hero_desktop.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="position-absolute top-0 start-0 text-start ps-5">
                <h3 className="fs-1 font-monospace">Gamer</h3>
                <p className="fs-2">Learn how to play!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets2.razerzone.com/images/pnx.assets/a91652f5ab76119f0d8ff9c14ee5633a/kv-desktop.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="position-absolute top-0 end-0 text-end pe-5">
                <h3 className="fs-1 font-monospace">Best utils for gamers!</h3>
                <p className="fs-2">Razer</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets2.razerzone.com/images/pnx.assets/e36ecbd1b3cf8451f4581518ecfb4ffe/hyperspeed.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className="position-absolute top-0 start-0 text-start ps-3">
                <h3 className="fs-1 font-monospace">STYLE YOUR CONFIDENCE</h3>
                <p className="fs-3">Living in VRG GRL</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
export default Slider;
