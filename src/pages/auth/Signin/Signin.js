import React from "react";
import "./_Signin.scss";
import Header from "../../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

const Signin = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Register</h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Signin;
