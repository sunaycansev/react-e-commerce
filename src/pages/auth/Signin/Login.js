import React from "react";
import "./_Login.scss";
import Header from "../../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Login page</h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Login;
