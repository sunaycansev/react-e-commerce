import React from "react";
import Header from "../../../components/Header/Header";
import "./_Signup.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useFormik } from "formik";
import validationSchema from "./validations";

const Signup = () => {
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
      console.log(values);
    },
  });
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col className="justify-content-center align-items-center d-flex">
            <h1>Sign Up</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center align-items-center ">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="my-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="e mail gir"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-1"
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error-text">{errors.email}</div>
              )}
              <label htmlFor="password" className="my-2">
                password
              </label>
              <input
                type="password"
                placeholder="password gir"
                name="password"
                className="p-1"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="error-text">{errors.password}</div>
              )}
              <label htmlFor="passwordConfirm" className="my-2">
                passwordConfirm
              </label>
              <input
                type="password"
                placeholder="password doğrula"
                name="passwordConfirm"
                className="p-1"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.passwordConfirm && touched.passwordConfirm && (
                <div className="error-text">{errors.passwordConfirm}</div>
              )}
              <br />

              <input
                type="checkbox"
                name="agree"
                id="agree"
                value={values.agree}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label htmlFor="agree" className="d-inline ms-2">
                I agree <span>Term</span>,<span>Privacy Policy</span> and{" "}
                <span>Fees</span>
              </label>
              <br />
              {errors.agree && touched.agree && (
                <div className="error-text">{errors.agree}</div>
              )}
              <br />
              <button
                type="submit"
                disabled={!dirty || isSubmitting}
                className="my-2 p-1 w-100"
              >
                Sign Up
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Signup;
