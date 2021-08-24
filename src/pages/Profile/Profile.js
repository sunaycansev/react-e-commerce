import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../../contexts/CartContext";
import Footer from "../../components/Footer/Footer";
import { FiEdit3, FiLogOut, FiMail } from "react-icons/fi";
function Profile({ history }) {
  const { user, logout } = useAuthContext();

  const { cart } = useCartContext();
  const handleLogout = async () => {
    console.log("ddsa");
    logout(() => {
      history.push("/");
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Container className="d-flex justify-content-center align-items-center py-4 my-4">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="card p-4 px-5 shadow-lg" style={{ width: "25rem" }}>
              <img
                src="https://picsum.photos/300"
                className="card-img-top rounded-circle"
                alt="avatar"
              />
              <h3 className="text-center mt-3">Alice Sterling</h3>
              <div className="card-body d-flex justify-content-between">
                <button className="card-link btn btn-sm btn-info px-3 ">
                  Edit Profile
                  <span>
                    <FiEdit3 className="ms-3" />
                  </span>{" "}
                  <br />
                </button>
                <button
                  className="card-link btn btn-sm btn-danger px-3"
                  onClick={handleLogout}
                >
                  Logout
                  <span>
                    <FiLogOut className="ms-3" />
                  </span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center fw-bolder">User Infos</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex flex-column">
                  <span className="text-center d-block fw-bold">
                    {" "}
                    <span>
                      <FiMail className="me-2" />
                    </span>
                    E-mail
                  </span>{" "}
                  {user?.email}
                </li>
                <li className="list-group-item d-flex flex-column">
                  <span className="text-center d-block fw-bold">
                    {" "}
                    <span>
                      <FiMail className="me-2" />
                    </span>
                    Password
                  </span>{" "}
                  *******
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
export default Profile;
