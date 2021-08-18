import React from "react";
import Header from "../../../components/Header/Header";
import "./_Signup.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { GrMail } from "react-icons/gr";
import { BsLockFill, BsLock } from "react-icons/bs";
import png from "../../../assets/signup-image.jpg";
import { useAuthContext } from "../../../contexts/AuthContext";

import axios from "axios";
import { registerUser } from "../../../api";

const Signup = () => {
  const { users, setUsers, login } = useAuthContext();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    dirty,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      agree: false,
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await registerUser({
          email: values.email,
          password: values.password,
        });
        console.log(registerResponse);
        setUsers([...users, { ...values }]);
        window.localStorage.setItem(
          "users",
          JSON.stringify([...users, { ...values }])
        );
        login();
      } catch (e) {
        console.log(e);
      }
    },
  });
  console.log(users);
  return (
    <React.Fragment>
      <Header />
      {/*<Container className="heading-container">*/}
      {/*  <Row className="mt-5">*/}
      {/*    <Col className="justify-content-center align-items-center d-flex">*/}
      {/*      */}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</Container>*/}

      <Container className=" p-5 signup-container my-5">
        <Row className="signup-content ">
          <Col className="d-flex justify-content-center align-items-center signup-form flex-column ">
            <h2 className="heading mx-auto text-center fw-bold fs-1">
              Sign Up
            </h2>
            <form className="w-100" onSubmit={handleSubmit}>
              <div className="form-group">
                <label
                  id="email-label"
                  htmlFor="email"
                  className="align-self-center"
                >
                  <GrMail className="mail-icon icon-size" />
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-100 d-block"
                  id="email"
                  value={values.email}
                />
              </div>
              {errors.email && touched.email && (
                <p className="error-text">{errors.email}</p>
              )}
              <div className="form-group">
                <label
                  htmlFor="password"
                  className=" align-self-center"
                  id="password-label"
                >
                  <BsLockFill className="password-icon icon-size" />
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="w-100"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password && (
                <p className="error-text">{errors.password}</p>
              )}
              <div className="form-group">
                <label
                  htmlFor="passwordConfirm"
                  className=" align-self-center"
                  id="passwordConfirm-label"
                >
                  <BsLock className="password-icon icon-size" />
                </label>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  className="w-100"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.passwordConfirm && touched.passwordConfirm && (
                <p className="error-text">{errors.passwordConfirm}</p>
              )}

              <div className="form-group d-flex justify-content-start">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  value={values.agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="agree-term d-inline-block my-2 me-2"
                />

                <label
                  htmlFor="agree"
                  className="label-agree-term float-end align-self-center mt-3"
                >
                  I agree all statements in{" "}
                  <a
                    href="#"
                    className="term-service text-decoration-underline text-dark"
                  >
                    Terms of service
                  </a>
                </label>
                <br />
              </div>
              {errors.agree && touched.agree && (
                <p className="error-text " id="agree-error-msg">
                  {errors.agree}
                </p>
              )}

              <div className="form-group">
                <button
                  type="submit"
                  disabled={!dirty || isSubmitting}
                  className="d-inline-block"
                  id="submit-btn"
                >
                  Register
                </button>
              </div>
            </form>
          </Col>
          <Col className="signup-image d-flex justify-content-center align-items-center flex-column">
            <figure className="mb-2 text-center">
              <img src={png} alt="signup-img" className="" />
            </figure>
            <a href="#" className="text-dark d-block text-center">
              I am already member
            </a>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Signup;
