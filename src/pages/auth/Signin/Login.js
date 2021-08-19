import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./_Login.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { GrMail } from "react-icons/gr";
import { BsLockFill } from "react-icons/bs";
import png from "../../../assets/signin-image.jpg";
import { useAuthContext } from "../../../contexts/AuthContext";

const Login = () => {
  const { users, setUsers } = useAuthContext();
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
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <Header />

      <Container className=" p-5 signup-container my-5">
        <Row className="signup-content ">
          <Col className="d-flex justify-content-center align-items-center signup-form flex-column ">
            <h2 className="heading mx-auto text-center fw-bold fs-1">Login</h2>
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
                <button
                  type="submit"
                  disabled={!dirty || isSubmitting}
                  className="d-inline-block"
                  id="submit-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </Col>
          <Col className="signup-image d-flex justify-content-center align-items-center flex-column">
            <figure className="mb-2 text-center">
              <img src={png} alt="signup-img" className="" />
            </figure>
            <a href="/signup" className="text-dark d-block text-center">
              Create an account
            </a>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default Login;
