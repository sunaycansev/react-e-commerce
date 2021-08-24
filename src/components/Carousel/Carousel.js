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
                src="https://www.louisvuitton.com/images/PUSH4_CAPUCINES_LSD_US_DI3.jpg?wid=2048"
                alt="First slide"
              />
              <Carousel.Caption className="position-absolute top-0 start-0 text-start ps-5">
                <h3 className="fs-1 font-monospace"></h3>
                <p className="fs-2"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://nohowstyle.com/media/home/banner_slide/BANNER_HOME_5_1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="position-absolute top-0 end-0 text-end pe-5">
                {/*<h3 className="fs-1 font-monospace">Second slide label</h3>*/}
                {/*<p className="fs-2">*/}
                {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                {/*</p>*/}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.e-stradivarius.net/5/static2/homes/2021_w35/img/mkt-w/1920/2400_camisas_eurosur.jpg?t=20210824041511"
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
